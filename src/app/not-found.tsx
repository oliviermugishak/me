"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-lg mx-auto text-center"
        >
          <motion.div
            initial={{ rotate: -10 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-8"
          >
            <Compass
              size={64}
              className="text-text-muted mx-auto"
              weight="light"
            />
          </motion.div>

          <h1 className="text-6xl md:text-7xl font-display font-bold tracking-tight mb-4">
            404
          </h1>

          <p className="text-xl text-text-muted mb-2">
            Looks like you wandered off the map.
          </p>
          <p className="text-sm text-text-muted/60 mb-10">
            This page doesn&apos;t exist — or maybe it never did.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="primary" size="lg" asChild>
              <Link href="/">Go back home</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/#contact">Tell me I&apos;m lost</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
