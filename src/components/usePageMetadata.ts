import { useEffect } from "react";

type PageMetadata = {
  title: string;
  description: string;
  socialDescription: string;
};

export function usePageMetadata({ title, description, socialDescription }: PageMetadata) {
  useEffect(() => {
    document.title = title;

    const metadata = [
      { selector: 'meta[name="description"]', content: description },
      { selector: 'meta[property="og:title"]', content: title },
      { selector: 'meta[property="og:description"]', content: socialDescription },
      { selector: 'meta[name="twitter:title"]', content: title },
      { selector: 'meta[name="twitter:description"]', content: socialDescription },
    ];

    for (const { selector, content } of metadata) {
      document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
    }
  }, [title, description, socialDescription]);
}
