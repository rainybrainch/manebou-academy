#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
import os

MAPPING = {
    'お金の基本コース': 'money-basics.webp',
    '日本経済と社会のお金': 'economics.webp',
    '家計管理の基本': 'money-household.webp',
    '税金の基本': 'money-tax.webp',
    '保険の基本': 'money-insurance.webp',
    'ライフプランニング入門': 'money-lifeplan.webp',
    'ふるさと納税完全ガイド': 'furusato-tax.webp',
    '副業・フリーランスのお金入門': 'freelance-money.webp',
}

SOURCE_DIR = r'C:\tmp\manebou-thumbnails'
OUTPUT_DIR = r'public\images\courses'

print("=" * 70)
print("サムネイル PNG → WebP 変換（テンポラリから）")
print("=" * 70)

os.makedirs(OUTPUT_DIR, exist_ok=True)
converted = 0

try:
    files = os.listdir(SOURCE_DIR)
    print(f"検出ファイル: {len(files)} 個\n")

    for filename in sorted(files):
        if not filename.endswith('.png'):
            continue

        output_name = None
        for search_text, out_name in MAPPING.items():
            if search_text in filename:
                output_name = out_name
                break

        if not output_name:
            print(f"✗ {filename}: マッピング対象外")
            continue

        try:
            src_path = os.path.join(SOURCE_DIR, filename)
            dst_path = os.path.join(OUTPUT_DIR, output_name)

            img = Image.open(src_path).convert("RGB")
            w, h = img.size

            MAX_W = 800
            if w > MAX_W:
                new_h = int(h * MAX_W / w)
                img = img.resize((MAX_W, new_h), Image.LANCZOS)

            img.save(dst_path, "WEBP", quality=80, method=6)

            original_size = os.path.getsize(src_path) / (1024 * 1024)
            compressed_size = os.path.getsize(dst_path) / 1024
            ratio = (1 - compressed_size / (original_size * 1024)) * 100

            print(f"✓ {output_name:<30} ({original_size:.1f}MB → {compressed_size:.0f}KB, {ratio:.0f}%圧縮)")
            converted += 1

        except Exception as e:
            print(f"✗ {filename}: {e}")

except Exception as e:
    print(f"エラー: {e}")

print()
print("=" * 70)
print(f"✓ 合計 {converted} ファイルを変換しました")
print("=" * 70)
