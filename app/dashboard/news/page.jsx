"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const NEWS_API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY; // Replace with your NewsAPI key
const NEWS_API_URL = `https://newsapi.org/v2/everything?q=finance OR stock OR trading OR market&language=en&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(NEWS_API_URL);
        const data = await response.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError("Failed to fetch news");
        }
      } catch (err) {
        setError("Failed to fetch news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading)
    return (
      <div className="flex h-full items-center justify-center">
        Loading news...
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <div className="mt-4 px-8">
      <h2 className="mb-4">Latest Market News</h2>
      <ul className="minimal-scrollbar flex max-h-[85vh] flex-col gap-4 overflow-y-scroll">
        {articles.slice(0, 10).map((article, idx) => (
          <li key={idx}>
            <Card className="p-4">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <strong>{article.title}</strong>
              </a>
              <div className="pb-4">
                <small>
                  {article.source.name} -{" "}
                  {new Date(article.publishedAt).toLocaleString()}
                </small>
              </div>
              <div className="text-slate-300">{article.description}</div>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
