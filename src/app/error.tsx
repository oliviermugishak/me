"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { WarningCircle } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-8"
          >
            <WarningCircle
              size={64}
              className="text-amber-500 mx-auto"
              weight="light"
            />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-4">
            Something broke
          </h1>

          <p className="text-lg text-text-muted mb-2">
            Not on your end — I promise.
          </p>
          <p className="text-sm text-text-muted/60 mb-10">
            This is on me. A button somewhere is having a bad day.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button variant="primary" size="lg" onClick={reset}>
              Try again
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/">Head home</Link>
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
