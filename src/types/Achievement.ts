export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  progress: number;
  total: number;
  completed?: boolean;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
}
