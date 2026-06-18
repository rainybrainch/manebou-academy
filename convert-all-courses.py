#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from PIL import Image
from pathlib import Path

COURSE_MAPPING = {
    'お金の基本コース': 'mbc',
    'ふるさと納税完全ガイド': 'fst',
    'フリーランスのお金入門': 'fm',
    'ライフプランニング入門': 'lp',
    '保険の基本': 'ins',
    '家計管理の基本': 'hh',
    '日本経済と社会のお金': 'econ',
    '税金の基本': 'tax',
}

BASE_IMAGE_DIR = r'C:\Users\fukuf\OneDrive\画像\マネぼうアカデミー\お金コース'
OUTPUT_BASE_DIR = r'public\comics'

def convert_course(course_name, prefix):
    course_path = Path(BASE_IMAGE_DIR) / course_name
    if not course_path.exists():
        return 0

    png_files = sorted(list(course_path.glob('*.png')))
    if not png_files:
        return 0

    print(f"\n【{course_name}】 ({len(png_files)} files)")
    converted = 0

    for idx, png_path in enumerate(png_files, 1):
        try:
            # シンプル: ファイル順に ch1-1, ch1-2, ... ch1-5, ch2-1...
            ch_num = 1 + (idx - 1) // 5
            lesson_num = ((idx - 1) % 5) + 1

            output_dir = Path(OUTPUT_BASE_DIR) / f"{prefix}-ch{ch_num}"
            output_dir.mkdir(parents=True, exist_ok=True)
            output_path = output_dir / f"{prefix}-{ch_num}-{lesson_num}.webp"

            img = Image.open(png_path).convert("RGB")
            w, h = img.size

            MAX_W = 800
            if w > MAX_W:
                new_h = int(h * MAX_W / w)
                img = img.resize((MAX_W, new_h), Image.LANCZOS)

            img.save(str(output_path), "WEBP", quality=80, method=6)

            original_size = png_path.stat().st_size / (1024 * 1024)
            compressed_size = output_path.stat().st_size / 1024
            ratio = (1 - compressed_size / (original_size * 1024)) * 100

            print(f"  ✓ {idx:2d}. {prefix}-{ch_num}-{lesson_num}.webp ({original_size:.1f}MB → {compressed_size:.0f}KB, {ratio:.0f}%圧縮)")
            converted += 1

        except Exception as e:
            print(f"  ✗ {idx}. {png_path.name}: {e}")

    return converted

print("=" * 70)
print("全コース PNG → WebP 変換（圧縮・軽量化）")
print("=" * 70)

total = 0
for course_name, prefix in COURSE_MAPPING.items():
    total += convert_course(course_name, prefix)

print("\n" + "=" * 70)
print(f"✓ 合計 {total} ファイルを変換しました")
print("=" * 70)
