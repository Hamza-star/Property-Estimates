import Cookies from "js-cookie";

const COOKIE_KEY = "visitedLinks";

export function addVisitedLink(link: string) {
  const existing = Cookies.get(COOKIE_KEY);
  const visited: string[] = existing ? JSON.parse(existing) : [];

  if (!visited.includes(link)) {
    visited.push(link);
  }

  Cookies.set(COOKIE_KEY, JSON.stringify(visited), { expires: 30 }); // 30 days
}

export function getVisitedLinks(): string[] {
  const existing = Cookies.get(COOKIE_KEY);
  return existing ? JSON.parse(existing) : [];
}
