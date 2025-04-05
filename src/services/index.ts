const base_url = process.env.NEXT_PUBLIC_BASE_URL; // base url

export async function getAnimeOngoing() {
  const res = await fetch(`${base_url}/ongoing`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}

export async function getAnimeCompleted() {
  const res = await fetch(`${base_url}/completed`, {
    cache: "force-cache",
    next: { revalidate: 60 * 60 },
  });
  return res.json();
}

export async function getAnimeSearch(keyword: string) {
  const res = await fetch(`${base_url}/search/?s=${keyword}`);
  return res.json();
}

export async function getOngoingAnime(page?: string) {
  const currentPage = page;
  const url = !page
    ? `${base_url}/ongoing`
    : `${base_url}/ongoing/page/${
        currentPage == "on-going-anime" ? "1" : currentPage
      }`;
  const res = await fetch(url);
  return res.json();
}
