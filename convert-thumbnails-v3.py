#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
import os
from pathlib import Path

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

SOURCE_DIR = r'C:\Users\fukuf\OneDrive\画像\マネぼうアカデミー\お金コース\お金を学ぼう＿サムネ'
OUTPUT_DIR = r'public\images\courses'

print("=" * 70)
print("コースサムネイル PNG → WebP 変換")
print("=" * 70)

os.makedirs(OUTPUT_DIR, exist_ok=True)
converted = 0

try:
    # フォルダ内のファイルを直接リスト化
    files = os.listdir(SOURCE_DIR)
    print(f"検出ファイル数: {len(files)}\n")

    for filename in sorted(files):
        if not filename.endswith('.png'):
            continue

        # ファイル名から対応する出力ファイルを検索
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

            # 画像を開いてRGBに変換
            img = Image.open(src_path).convert("RGB")
            w, h = img.size

            # 800px以上なら縮小
            MAX_W = 800
            if w > MAX_W:
                new_h = int(h * MAX_W / w)
                img = img.resize((MAX_W, new_h), Image.LANCZOS)

            # WebP保存
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
