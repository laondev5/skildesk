"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

// Mock data for b

export default function UserViewBlogDetails({ blogPosts }) {
  console.log(blogPosts);
  return (
    <>
      <section className="w-full bg-gradient-to-br from-purple-500 to-pink-500">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-16 text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl">Discover the latest insights and tutorials</p>
        </motion.div>
      </section>

      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={post.coverImage}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <div
                  className="w-[90%] ProseMirror whitespace-pre-line line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: post?.description }}
                />

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>
                    {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </main>
    </>
  );
}
