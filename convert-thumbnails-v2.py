#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
from pathlib import Path

MAPPING = [
    ('1.お金の基本コース.png', 'money-basics.webp'),
    ('2.日本経済と社会のお金.png', 'economics.webp'),
    ('3.家計管理の基本.png', 'money-household.webp'),
    ('4.税金の基本.png', 'money-tax.webp'),
    ('5.保険の基本.png', 'money-insurance.webp'),
    ('6.ライフプランニング入門.png', 'money-lifeplan.webp'),
    ('7.ふるさと納税完全ガイド.png', 'furusato-tax.webp'),
    ('8.副業・フリーランスのお金入門.png', 'freelance-money.webp'),
]

# サムネフォルダの直接指定
SOURCE_DIR = Path(r'C:\Users\fukuf\OneDrive\画像\マネぼうアカデミー\お金コース') / 'お金を学ぼう＿サムネ'
OUTPUT_DIR = Path(r'public\images\courses')

print("=" * 70)
print("コースサムネイル PNG → WebP 変換（圧縮・軽量化）")
print("=" * 70)
print(f"ソース: {SOURCE_DIR}")
print(f"出力先: {OUTPUT_DIR}")
print()

OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
converted = 0

for src_name, dst_name in MAPPING:
    try:
        src_path = SOURCE_DIR / src_name

        # ファイル存在確認
        if not src_path.exists():
            print(f"✗ {src_name}: ファイルなし")
            continue

        dst_path = OUTPUT_DIR / dst_name

        # 画像を開いてRGBに変換
        img = Image.open(str(src_path)).convert("RGB")
        w, h = img.size

        # 800px以上なら縮小
        MAX_W = 800
        if w > MAX_W:
            new_h = int(h * MAX_W / w)
            img = img.resize((MAX_W, new_h), Image.LANCZOS)

        # WebP保存（quality=80, method=6）
        img.save(str(dst_path), "WEBP", quality=80, method=6)

        original_size = src_path.stat().st_size / (1024 * 1024)
        compressed_size = dst_path.stat().st_size / 1024
        ratio = (1 - compressed_size / (original_size * 1024)) * 100

        print(f"✓ {dst_name:<30} ({original_size:.1f}MB → {compressed_size:.0f}KB, {ratio:.0f}%圧縮)")
        converted += 1

    except Exception as e:
        print(f"✗ {src_name}: {e}")

print()
print("=" * 70)
print(f"✓ 合計 {converted} ファイルを変換しました")
print("=" * 70)
