import { getFirstLatter } from '../getFirstLatter';

export function getInitials(name: string) {
  return name.split(' ').map((str) => getFirstLatter(str)?.toUpperCase()).join('');
}
