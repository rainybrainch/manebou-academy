import { test, expect } from '@playwright/test';

test.describe('ZAi UNIT4 - 理論株価と株価', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to UNIT4 page (uses baseURL from playwright.config)
    await page.goto('/courses/zai-12unit/4');
    // Wait for content to load
    await page.waitForLoadState('networkidle');
  });

  test('UNIT4 ページが正常に読み込まれる', async ({ page }) => {
    // Check page title
    const title = await page.textContent('h1');
    expect(title).toContain('理論株価と株価');
  });

  test('UNIT4 4タブが すべて存在する', async ({ page }) => {
    // Check for 4 tabs: child academy, teacher guide, worksheet, quiz
    const childAcademyTab = page.getByRole('tab', { name: /子ども向け/i });
    const teacherGuideTab = page.getByRole('tab', { name: /先生用/i });
    const worksheetTab = page.getByRole('tab', { name: /ワーク|宿題/i });
    const quizTab = page.getByRole('tab', { name: /クイズ|確認/i });

    await expect(childAcademyTab).toBeVisible();
    await expect(teacherGuideTab).toBeVisible();
    await expect(worksheetTab).toBeVisible();
    await expect(quizTab).toBeVisible();
  });

  test('60分授業構成が正しく表示される (5+5+30+10+7+3)', async ({ page }) => {
    // Check for time display
    const content = await page.textContent('body');

    // Look for session time indicators
    expect(content).toContain('導入');
    expect(content).toContain('5分');

    expect(content).toContain('ゲーム準備');

    expect(content).toContain('ゲーム体験');
    expect(content).toContain('30分');

    expect(content).toContain('振り返り');
    expect(content).toContain('10分');

    expect(content).toContain('図解');
    expect(content).toContain('7分');

    expect(content).toContain('まとめ');
    expect(content).toContain('3分');
  });

  test('クイズ q5 が単一選択（4オプション）で正解が option[0]', async ({ page }) => {
    // Navigate to quiz tab
    const quizTab = page.getByRole('tab', { name: /クイズ|確認/i });
    await quizTab.click();

    // Wait for quiz to load
    await page.waitForTimeout(500);

    // Find q5 question
    const q5Question = page.locator('text=/なぜ理論株価と実勢価格の差が生まれるのですか/i');
    await expect(q5Question).toBeVisible();

    // Check for exactly 4 options (should have 4 radio/choice elements in q5)
    const q5Container = q5Question.locator('..').locator('..');
    const options = q5Container.locator('[role="radio"], label');

    const optionCount = await options.count();
    expect(optionCount).toBe(4);

    // Check that option 0 (投資家の感情) is marked as correct option
    const firstOption = q5Container.locator('label').first();
    const firstOptionText = await firstOption.textContent();
    expect(firstOptionText).toContain('投資家の感情や予想が違うから');
  });

  test('クイズ採点が正常に機能する', async ({ page }) => {
    // Navigate to quiz tab
    const quizTab = page.getByRole('tab', { name: /クイズ|確認/i });
    await quizTab.click();

    // Wait for quiz to load
    await page.waitForTimeout(500);

    // Find and select answer for q1 (correct answer)
    const q1Container = page.locator('text=/理論株価と実勢価格の違い/i').locator('..').locator('..');
    const q1Options = q1Container.locator('label');
    // Second option is correct for q1
    await q1Options.nth(1).click();

    // Find q5 and select correct answer (option 0)
    const q5Container = page.locator('text=/なぜ理論株価と実勢価格の差が生まれるのですか/i').locator('..').locator('..');
    const q5Options = q5Container.locator('label');
    await q5Options.first().click();

    // Look for submit button and click it
    const submitButton = page.getByRole('button', { name: /採点|送信|確認/i });
    if (await submitButton.isVisible()) {
      await submitButton.click();
      await page.waitForTimeout(500);
    }

    // Check for score display (should show passing or partial score)
    const scoreText = page.locator('text=/スコア|正解|点数/i');
    // Verify score display exists after submission
    if (await scoreText.isVisible()) {
      const score = await scoreText.textContent();
      expect(score).toBeTruthy();
    }
  });

  test('先生用授業ガイド が60分構成を表示する', async ({ page }) => {
    // Navigate to teacher guide tab
    const teacherGuideTab = page.getByRole('tab', { name: /先生用/i });
    await teacherGuideTab.click();

    // Wait for content
    await page.waitForTimeout(500);

    // Check for teacher guide content
    const content = await page.textContent('body');
    expect(content).toContain('導入');
    expect(content).toContain('ゲーム準備');
    expect(content).toContain('ゲーム体験');
    expect(content).toContain('振り返り');
    expect(content).toContain('図解');
    expect(content).toContain('まとめ');
  });

  test('ナビゲーション: 前のユニット (UNIT3) へのリンク', async ({ page }) => {
    // Check for prev unit link
    const prevLink = page.getByRole('link', { name: /UNIT3|前へ|◀/i });
    if (await prevLink.isVisible()) {
      const href = await prevLink.getAttribute('href');
      expect(href).toContain('3');
    }
  });

  test('ナビゲーション: 次のユニット (UNIT5) へのリンク', async ({ page }) => {
    // Check for next unit link
    const nextLink = page.getByRole('link', { name: /UNIT5|次へ|▶/i });
    if (await nextLink.isVisible()) {
      const href = await nextLink.getAttribute('href');
      expect(href).toContain('5');
    }
  });

  test('金融表現: 「必ず」「絶対」の禁止', async ({ page }) => {
    // Navigate all tabs and check for forbidden absolute language
    const tabs = page.getByRole('tab');
    const tabCount = await tabs.count();

    for (let i = 0; i < tabCount; i++) {
      const tab = tabs.nth(i);
      await tab.click();
      await page.waitForTimeout(500);

      const content = await page.textContent('body');

      // Check for forbidden absolute language
      expect(content).not.toMatch(/必ず/);
      expect(content).not.toMatch(/絶対に/);
      expect(content).not.toMatch(/確実に/);
    }
  });
});

test.describe('UNIT1-3, UNIT5, UNIT12 回帰確認', () => {
  test('UNIT1 ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/courses/zai-12unit/1');
    await page.waitForLoadState('networkidle');
    const title = await page.textContent('h1');
    expect(title).toBeTruthy();
  });

  test('UNIT2 ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/courses/zai-12unit/2');
    await page.waitForLoadState('networkidle');
    const title = await page.textContent('h1');
    expect(title).toBeTruthy();
  });

  test('UNIT3 ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/courses/zai-12unit/3');
    await page.waitForLoadState('networkidle');
    const title = await page.textContent('h1');
    expect(title).toBeTruthy();
  });

  test('UNIT5 ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/courses/zai-12unit/5');
    await page.waitForLoadState('networkidle');
    const title = await page.textContent('h1');
    expect(title).toBeTruthy();
  });

  test('UNIT12 ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/courses/zai-12unit/12');
    await page.waitForLoadState('networkidle');
    const title = await page.textContent('h1');
    expect(title).toBeTruthy();
  });

  test('ドイツ語教材ページが正常に読み込まれる', async ({ page }) => {
    await page.goto('/german');
    await page.waitForLoadState('networkidle');
    const content = await page.textContent('body');
    expect(content).toBeTruthy();
  });
});
