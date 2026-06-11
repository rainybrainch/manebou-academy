import ProgressClient from './ProgressClient';
import { categories } from '@/data/courses';

export default function ProgressPage() {
  return <ProgressClient categories={categories} />;
}
