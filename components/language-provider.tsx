"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "zh"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.capabilities": "Capabilities",
    "nav.projects": "Projects",
    "nav.resources": "Resources",

    // Home page
    "home.title": "Open Source Program Office",
    "home.subtitle": "Driving innovation through open source collaboration",
    "home.vision.title": "Our Vision",
    "home.vision.content":
      "To establish a thriving open source culture that drives innovation, collaboration, and technological excellence across our organization.",
    "home.mission.title": "Our Mission",
    "home.mission.content":
      "To enable and support open source adoption, contribution, and compliance throughout the organization while fostering a collaborative ecosystem with the broader open source community.",
    "home.responsibilities.title": "Key Responsibilities",
    "home.responsibilities.item1": "Open Source Strategy & Governance",
    "home.responsibilities.item2": "License Compliance & Risk Management",
    "home.responsibilities.item3": "Community Engagement & Contribution",
    "home.responsibilities.item4": "Developer Education & Enablement",
    "home.responsibilities.item5": "Project Incubation & Maintenance",
    "home.team.title": "Our Team",
    "home.team.director": "OSPO Director",
    "home.team.manager": "Program Manager",
    "home.team.engineer": "Open Source Engineer",
    "home.team.legal": "Legal Counsel",
    "home.team.developer": "Developer Advocate",
    "home.links.title": "Important Links",
    "home.links.internal": "Internal Resources",
    "home.links.external": "External Resources",

    // Capabilities page
    "capabilities.title": "Open Source Capabilities",
    "capabilities.subtitle": "Building excellence in open source practices",
    "capabilities.progress": "Progress",

    // Projects page
    "projects.title": "Open Source Projects",
    "projects.subtitle": "Our contributions to the open source ecosystem",
    "projects.internal": "Internal Projects",
    "projects.external": "External Contributions",
    "projects.status": "Status",
    "projects.active": "Active",
    "projects.maintenance": "Maintenance",
    "projects.incubating": "Incubating",

    // Resources page
    "resources.title": "Resources & Guidelines",
    "resources.subtitle": "Policies, processes, and success stories",
    "resources.policies.title": "Policies & Guidelines",
    "resources.processes.title": "Processes",
    "resources.cases.title": "Success Cases",

    // Footer
    "footer.copyright": "© 2025 OSPO. All rights reserved.",
    "footer.contact": "Contact Us",
  },
  zh: {
    // Navigation
    "nav.home": "首页",
    "nav.capabilities": "能力建设",
    "nav.projects": "项目列表",
    "nav.resources": "资源中心",

    // Home page
    "home.title": "开源项目办公室",
    "home.subtitle": "通过开源协作推动创新",
    "home.vision.title": "我们的愿景",
    "home.vision.content": "建立蓬勃发展的开源文化，推动整个组织的创新、协作和技术卓越。",
    "home.mission.title": "我们的使命",
    "home.mission.content": "在整个组织中支持开源采用、贡献和合规，同时与更广泛的开源社区建立协作生态系统。",
    "home.responsibilities.title": "主要职责",
    "home.responsibilities.item1": "开源战略与治理",
    "home.responsibilities.item2": "许可证合规与风险管理",
    "home.responsibilities.item3": "社区参与与贡献",
    "home.responsibilities.item4": "开发者教育与赋能",
    "home.responsibilities.item5": "项目孵化与维护",
    "home.team.title": "我们的团队",
    "home.team.director": "OSPO 主管",
    "home.team.manager": "项目经理",
    "home.team.engineer": "开源工程师",
    "home.team.legal": "法律顾问",
    "home.team.developer": "开发者倡导者",
    "home.links.title": "重要链接",
    "home.links.internal": "内部资源",
    "home.links.external": "外部资源",

    // Capabilities page
    "capabilities.title": "开源能力建设",
    "capabilities.subtitle": "构建开源实践卓越能力",
    "capabilities.progress": "进度",

    // Projects page
    "projects.title": "开源项目",
    "projects.subtitle": "我们对开源生态系统的贡献",
    "projects.internal": "内部项目",
    "projects.external": "外部贡献",
    "projects.status": "状态",
    "projects.active": "活跃",
    "projects.maintenance": "维护中",
    "projects.incubating": "孵化中",

    // Resources page
    "resources.title": "资源与指南",
    "resources.subtitle": "政策、流程和成功案例",
    "resources.policies.title": "政策与指南",
    "resources.processes.title": "流程",
    "resources.cases.title": "成功案例",

    // Footer
    "footer.copyright": "© 2025 OSPO. 版权所有。",
    "footer.contact": "联系我们",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh")) {
      setLanguage(savedLanguage)
    } else {
      // Default to browser language if available and supported
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "zh") {
        setLanguage("zh")
      }
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

