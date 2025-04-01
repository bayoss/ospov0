"use client"

import { useLanguage } from "@/components/language-provider"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
        <p className="text-sm text-muted-foreground">{t("footer.copyright")}</p>
        <p className="text-sm text-muted-foreground">{t("footer.contact")}: ospo@example.com</p>
      </div>
    </footer>
  )
}

