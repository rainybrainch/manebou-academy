#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
import os
from pathlib import Path

# コース定義ファイルから章構造を抽出
COURSE_CHAPTERS = {
    'フリーランスのお金入門': {
        'prefix': 'fm',
        'chapters': [
            {
                'title': '第1章：副業収入の基礎知識',
                'lessons': [
                    '副業収入の税金——20万円の壁と確定申告',
                    '副業の経費——何が引けて何が引けないか',
                    '青色申告 vs 白色申告——65万円控除の選び方',
                ]
            },
            {
                'title': '第2章：フリーランスの社会保険と節税',
                'lessons': [
                    '国民健康保険と社会保険——フリーランスが払う保険料',
                    '消費税のしくみ——インボイス制度と課税事業者',
                ]
            }
        ]
    },
}

BASE_IMAGE_DIR = r'C:\Users\fukuf\OneDrive\画像\マネぼうアカデミー\お金コース'
OUTPUT_BASE_DIR = r'public\comics'

def convert_course_images(course_name, course_config):
    """コースフォルダ内のPNG画像をWebPに変換"""
    course_path = Path(BASE_IMAGE_DIR) / course_name
    prefix = course_config['prefix']

    if not course_path.exists():
        print(f"✗ {course_name} フォルダが見つかりません")
        return 0

    png_files = sorted(list(course_path.glob('*.png')))

    if not png_files:
        print(f"  {course_name}: PNG ファイルなし")
        return 0

    print(f"\n【{course_name}】")
    converted = 0

    # 講義タイトルから対応するファイルを検索
    lesson_idx = 0

    for ch_num, chapter in enumerate(course_config['chapters'], 1):
        print(f"  {chapter['title']}")

        for lesson_num, lesson_title in enumerate(chapter['lessons'], 1):
            if lesson_idx >= len(png_files):
                break

            png_path = png_files[lesson_idx]
            filename = png_path.stem

            try:
                output_dir = Path(OUTPUT_BASE_DIR) / f"{prefix}-ch{ch_num}"
                output_dir.mkdir(parents=True, exist_ok=True)
                output_path = output_dir / f"{prefix}-{ch_num}-{lesson_num}.webp"

                # 画像を開いてRGBに変換
                img = Image.open(png_path).convert("RGB")
                w, h = img.size

                # 800px以上なら縮小
                MAX_W = 800
                if w > MAX_W:
                    new_h = int(h * MAX_W / w)
                    img = img.resize((MAX_W, new_h), Image.LANCZOS)

                # WebP保存（quality=80, method=6）
                img.save(str(output_path), "WEBP", quality=80, method=6)

                original_size = png_path.stat().st_size / (1024 * 1024)  # MB
                compressed_size = output_path.stat().st_size / 1024  # KB
                ratio = (1 - compressed_size / (original_size * 1024)) * 100

                print(f"    ✓ {prefix}-{ch_num}-{lesson_num}.webp ({original_size:.1f}MB → {compressed_size:.0f}KB, 圧縮率{ratio:.0f}%)")
                converted += 1
                lesson_idx += 1

            except Exception as e:
                print(f"    ✗ {png_path.name}: {str(e)}")
                lesson_idx += 1

    return converted

# メイン処理
print("=" * 70)
print("PNG → WebP 変換（圧縮・軽量化）")
print("=" * 70)

total_converted = 0
for course_name, course_config in COURSE_CHAPTERS.items():
    converted = convert_course_images(course_name, course_config)
    total_converted += converted

print("\n" + "=" * 70)
print(f"✓ 合計 {total_converted} ファイルを変換しました")
print("=" * 70)
