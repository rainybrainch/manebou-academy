#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
import os

# ファイル名の順番と対応の正確なマッピング
FILE_ORDER = [
    ('1.お金の基本コース.png', 'money-basics.webp'),
    ('2.日本経済と社会のお金.png', 'economics.webp'),
    ('3.家計管理の基本.png', 'money-household.webp'),
    ('4.税金の基本.png', 'money-tax.webp'),
    ('5.保険の基本.png', 'money-insurance.webp'),
    ('6.ライフプランニング入門.png', 'money-lifeplan.webp'),
    ('7.ふるさと納税完全ガイド.png', 'furusato-tax.webp'),
    ('8.副業・フリーランスのお金入門.png', 'freelance-money.webp'),
]

SOURCE_DIR = r'C:\tmp\manebou-thumbnails'
OUTPUT_DIR = r'public\images\courses'

print("=" * 70)
print("サムネイル PNG → WebP 変換（修正版）")
print("=" * 70)

os.makedirs(OUTPUT_DIR, exist_ok=True)
converted = 0

try:
    files = os.listdir(SOURCE_DIR)
    print(f"検出ファイル: {len(files)} 個\n")

    for src_filename, output_name in FILE_ORDER:
        src_path = os.path.join(SOURCE_DIR, src_filename)

        if not os.path.exists(src_path):
            print(f"✗ {src_filename}: ファイルなし")
            continue

        try:
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
            print(f"✗ {src_filename}: {e}")

except Exception as e:
    print(f"エラー: {e}")

print()
print("=" * 70)
print(f"✓ 合計 {converted} ファイルを変換しました")
print("=" * 70)
