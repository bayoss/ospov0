"use client"

import { useLanguage } from "@/components/language-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const internalProjects = [
    {
      name: "OpenAPI Framework",
      description: "A framework for building and consuming RESTful APIs using OpenAPI specifications",
      status: "active",
      language: "TypeScript",
      repo: "https://github.com/example/openapi-framework",
      maintainers: ["Alex Chen", "Michael Zhang"],
      stars: 245,
    },
    {
      name: "Data Pipeline Toolkit",
      description: "Tools for building scalable data processing pipelines",
      status: "active",
      language: "Python",
      repo: "https://github.com/example/data-pipeline-toolkit",
      maintainers: ["Sarah Johnson", "David Wang"],
      stars: 187,
    },
    {
      name: "UI Component Library",
      description: "Reusable UI components built with React",
      status: "maintenance",
      language: "TypeScript",
      repo: "https://github.com/example/ui-components",
      maintainers: ["Emma Liu"],
      stars: 312,
    },
    {
      name: "Config Manager",
      description: "A configuration management library for distributed systems",
      status: "incubating",
      language: "Go",
      repo: "https://github.com/example/config-manager",
      maintainers: ["Michael Zhang"],
      stars: 56,
    },
  ]

  const externalProjects = [
    {
      name: "Kubernetes",
      description: "Container orchestration system",
      contribution: "Bug fixes and documentation improvements",
      repo: "https://github.com/kubernetes/kubernetes",
      contributors: ["Alex Chen", "David Wang"],
    },
    {
      name: "TensorFlow",
      description: "Machine learning framework",
      contribution: "Added new model optimization features",
      repo: "https://github.com/tensorflow/tensorflow",
      contributors: ["Sarah Johnson"],
    },
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      contribution: "Performance improvements and bug fixes",
      repo: "https://github.com/facebook/react",
      contributors: ["Emma Liu"],
    },
    {
      name: "Apache Kafka",
      description: "Distributed streaming platform",
      contribution: "New connector implementations",
      repo: "https://github.com/apache/kafka",
      contributors: ["Michael Zhang"],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500 hover:bg-green-600"
      case "maintenance":
        return "bg-yellow-500 hover:bg-yellow-600"
      case "incubating":
        return "bg-blue-500 hover:bg-blue-600"
      default:
        return "bg-gray-500 hover:bg-gray-600"
    }
  }

  return (
    <div className="container py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t("projects.title")}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t("projects.subtitle")}</p>
      </div>

      <Tabs defaultValue="internal" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="internal">{t("projects.internal")}</TabsTrigger>
          <TabsTrigger value="external">{t("projects.external")}</TabsTrigger>
        </TabsList>

        <TabsContent value="internal" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {internalProjects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{project.name}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </div>
                    <Badge className={getStatusColor(project.status)}>{t(`projects.${project.status}`)}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium mr-2">{project.language}</span>
                        <span className="text-sm text-muted-foreground">⭐ {project.stars}</span>
                      </div>
                      <Link
                        href={project.repo}
                        className="flex items-center text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-1 h-4 w-4" />
                        Repository
                      </Link>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Maintainers:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.maintainers.map((maintainer) => (
                          <Badge key={maintainer} variant="outline">
                            {maintainer}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="external" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2">
            {externalProjects.map((project) => (
              <Card key={project.name}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-1">Contribution:</h4>
                      <p className="text-sm">{project.contribution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-1">Contributors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.contributors.map((contributor) => (
                          <Badge key={contributor} variant="outline">
                            {contributor}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Link
                      href={project.repo}
                      className="flex items-center text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      Repository
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
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

