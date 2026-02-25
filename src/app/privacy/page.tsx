"use client";

import { Section } from "@/components/layout/section";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation, Trans } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <main className="relative z-10 pt-32 pb-20">
      <Section className="min-h-[60vh]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-3xl font-bold tracking-tighter mb-12"
        >
          {t("privacy.title")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-secondary space-y-8 max-w-3xl"
        >
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.section1Title")}</h2>
            <p className="leading-relaxed">
              <Trans
                i18nKey="privacy.section1Text"
                components={{
                  highlight: <span className="text-foreground" />,
                }}
              />
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.section2Title")}</h2>
            <p className="leading-relaxed">
              {t("privacy.section2Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.section3Title")}</h2>
            <p className="leading-relaxed">
              {t("privacy.section3Text")}
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">{t("privacy.section4Title")}</h2>
            <p className="leading-relaxed">
              {t("privacy.section4Text")}
            </p>
          </section>

          <p className="text-xs pt-8 border-t border-white/5 opacity-50">
            {t("privacy.lastUpdated")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16"
        >
          <Link href="/">
            <Button
              variant="outline"
              leftIcon={<ArrowLeft size={18} />}
              className="text-sm px-8 py-4 uppercase tracking-widest"
            >
              {t("privacy.backHome")}
            </Button>
          </Link>
        </motion.div>
      </Section>
    </main>
  );
}
