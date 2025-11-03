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

    // Compliance page
    "compliance.title": "Compliance",
    "compliance.tabs.policy": "Policy",
    "compliance.tabs.metrics": "Metrics",
    "compliance.tabs.knowledgebase": "Knowledge Base",
    "compliance.tabs.tools": "SCA Tools",
    
    "compliance.policy.title": "Policy Overview",
    "compliance.policy.license.title": "License Compliance",
    "compliance.policy.license.content": "Detailed organizational requirements for open source software license compliance, approval processes, and guidelines. Including license compatibility matrix and usage restrictions.",
    "compliance.policy.review.title": "Compliance Review Process",
    "compliance.policy.review.content": "Standard process for introducing new open source components and updating existing ones, including necessary review steps and approval chain.",
    "compliance.policy.contact.title": "Compliance Contacts",
    "compliance.policy.contact.content": "Compliance team contacts and on-call schedule for urgent compliance inquiries.",

    "compliance.metrics.title": "Compliance Dashboard",
    "compliance.metrics.kpi.title": "Key Metrics",
    "compliance.metrics.kpi.license": "License Compliance Rate",
    "compliance.metrics.kpi.tickets": "Open Compliance Tickets",
    "compliance.metrics.kpi.resolution": "Avg. Resolution Time",
    "compliance.metrics.trends.title": "Trend Analysis",
    "compliance.metrics.trends.content": "Charts showing historical compliance trends, issue resolution rates, and other data can be integrated here.",

    "compliance.kb.backend.title": "Backend Development Knowledge Base",
    "compliance.kb.backend.deps.title": "Dependency Management",
    "compliance.kb.backend.deps.item1": "Package Management Best Practices",
    "compliance.kb.backend.deps.item2": "Version Locking Strategy",
    "compliance.kb.backend.deps.item3": "License Compatibility Check",
    "compliance.kb.backend.build.title": "Build Process",
    "compliance.kb.backend.build.item1": "SCA Integration Guide",
    "compliance.kb.backend.build.item2": "Vulnerability Scanning Setup",
    "compliance.kb.backend.build.item3": "Compliance Checkpoint Config",

    "compliance.kb.frontend.title": "Frontend Development Knowledge Base",
    "compliance.kb.frontend.comp.title": "Component Usage",
    "compliance.kb.frontend.comp.item1": "Approved UI Component List",
    "compliance.kb.frontend.comp.item2": "Third-party Library Evaluation",
    "compliance.kb.frontend.comp.item3": "NPM Audit Configuration",
    "compliance.kb.frontend.build.title": "Build Optimization",
    "compliance.kb.frontend.build.item1": "Dependency Analysis Tools",
    "compliance.kb.frontend.build.item2": "Bundle Analysis Best Practices",
    "compliance.kb.frontend.build.item3": "License Extraction Setup",

    "compliance.tools.title": "Software Composition Analysis (SCA) Tools",
    "compliance.tools.visit": "Visit",

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

    // Compliance page
    "compliance.title": "合规管理",
    "compliance.tabs.policy": "合规政策",
    "compliance.tabs.metrics": "合规指标",
    "compliance.tabs.knowledgebase": "知识库",
    "compliance.tabs.tools": "SCA工具",
    
    "compliance.policy.title": "合规政策概览",
    "compliance.policy.license.title": "许可证合规",
    "compliance.policy.license.content": "详细说明组织的开源软件许可证合规要求、审批流程和指南。包括许可证兼容性矩阵和使用限制。",
    "compliance.policy.review.title": "合规审查流程",
    "compliance.policy.review.content": "描述新开源组件引入、现有组件更新的标准流程，包括必要的审查步骤和审批链。",
    "compliance.policy.contact.title": "合规联系人",
    "compliance.policy.contact.content": "合规团队联系方式和值班表，用于紧急合规问题咨询。",

    "compliance.metrics.title": "合规指标面板",
    "compliance.metrics.kpi.title": "关键指标",
    "compliance.metrics.kpi.license": "许可证合规率",
    "compliance.metrics.kpi.tickets": "待处理合规工单",
    "compliance.metrics.kpi.resolution": "平均处理时间",
    "compliance.metrics.trends.title": "趋势分析",
    "compliance.metrics.trends.content": "这里可以集成图表展示历史合规趋势、问题解决率等数据。",

    "compliance.kb.backend.title": "后端开发知识库",
    "compliance.kb.backend.deps.title": "依赖管理",
    "compliance.kb.backend.deps.item1": "包管理最佳实践",
    "compliance.kb.backend.deps.item2": "版本锁定策略",
    "compliance.kb.backend.deps.item3": "许可证兼容性检查",
    "compliance.kb.backend.build.title": "构建流程",
    "compliance.kb.backend.build.item1": "SCA集成指南",
    "compliance.kb.backend.build.item2": "漏洞扫描配置",
    "compliance.kb.backend.build.item3": "合规检查点配置",

    "compliance.kb.frontend.title": "前端开发知识库",
    "compliance.kb.frontend.comp.title": "组件使用",
    "compliance.kb.frontend.comp.item1": "已审核UI组件清单",
    "compliance.kb.frontend.comp.item2": "第三方库评估标准",
    "compliance.kb.frontend.comp.item3": "npm审计配置指南",
    "compliance.kb.frontend.build.title": "构建优化",
    "compliance.kb.frontend.build.item1": "依赖分析工具使用",
    "compliance.kb.frontend.build.item2": "Bundle分析最佳实践",
    "compliance.kb.frontend.build.item3": "许可证提取配置",

    "compliance.tools.title": "软件成分分析(SCA)工具",
    "compliance.tools.visit": "访问",

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

