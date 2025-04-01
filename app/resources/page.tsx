"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, FileCode, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ResourcesPage() {
  const { t } = useLanguage()

  const policies = [
    {
      title: "Open Source Contribution Policy",
      description: "Guidelines for contributing to open source projects",
      link: "#",
      updated: "2024-03-15",
    },
    {
      title: "Open Source License Compliance",
      description: "Requirements for using open source software",
      link: "#",
      updated: "2024-02-20",
    },
    {
      title: "Code of Conduct",
      description: "Expected behavior when participating in open source communities",
      link: "#",
      updated: "2024-01-10",
    },
    {
      title: "IP Rights Management",
      description: "Intellectual property considerations for open source",
      link: "#",
      updated: "2024-03-05",
    },
  ]

  const processes = [
    {
      title: "Contribution Workflow",
      description: "Step-by-step process for contributing to open source projects",
      link: "#",
      steps: 5,
    },
    {
      title: "License Review Process",
      description: "How to get approval for using new open source components",
      link: "#",
      steps: 4,
    },
    {
      title: "Project Release Process",
      description: "Steps to release an internal project as open source",
      link: "#",
      steps: 7,
    },
    {
      title: "Security Review Process",
      description: "Security assessment for open source components",
      link: "#",
      steps: 6,
    },
  ]

  const cases = [
    {
      title: "Cloud Infrastructure Optimization",
      description: "How our team leveraged open source tools to optimize cloud costs by 35%",
      department: "Cloud Infrastructure",
      impact: "High",
      link: "#",
    },
    {
      title: "Machine Learning Pipeline",
      description: "Building an ML pipeline with open source frameworks that reduced development time by 60%",
      department: "Data Science",
      impact: "High",
      link: "#",
    },
    {
      title: "Developer Productivity Tools",
      description: "Internal tools built on open source that improved developer productivity by 25%",
      department: "Engineering",
      impact: "Medium",
      link: "#",
    },
    {
      title: "Customer Support Dashboard",
      description: "Open source visualization tools that improved response time by 40%",
      department: "Customer Support",
      impact: "Medium",
      link: "#",
    },
  ]

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("resources.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("resources.subtitle")}</p>
      </div>

      <Tabs defaultValue="policies" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="policies">
            <FileText className="mr-2 h-4 w-4" />
            {t("resources.policies.title")}
          </TabsTrigger>
          <TabsTrigger value="processes">
            <FileCode className="mr-2 h-4 w-4" />
            {t("resources.processes.title")}
          </TabsTrigger>
          <TabsTrigger value="cases">
            <Award className="mr-2 h-4 w-4" />
            {t("resources.cases.title")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="policies" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {policies.map((policy) => (
              <Card key={policy.title}>
                <CardHeader>
                  <CardTitle>{policy.title}</CardTitle>
                  <CardDescription>{policy.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Updated: {policy.updated}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={policy.link}>View Policy</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="processes" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {processes.map((process) => (
              <Card key={process.title}>
                <CardHeader>
                  <CardTitle>{process.title}</CardTitle>
                  <CardDescription>{process.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{process.steps} steps</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={process.link}>View Process</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="cases" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {cases.map((case_study) => (
              <Card key={case_study.title}>
                <CardHeader>
                  <CardTitle>{case_study.title}</CardTitle>
                  <CardDescription>{case_study.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">
                        <strong>Department:</strong> {case_study.department}
                      </span>
                      <span className="text-sm">
                        <strong>Impact:</strong> {case_study.impact}
                      </span>
                    </div>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href={case_study.link}>Read Case Study</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

