"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"

export default function CompliancePage() {
  const { t } = useLanguage()
  
  const scaTools = [
    { name: "OSS Review Toolkit (ORT)", url: "https://oss-review-toolkit.org" },
    { name: "FOSSA", url: "https://fossa.com" },
    { name: "Snyk", url: "https://snyk.io" },
    { name: "Sonatype Nexus Lifecycle", url: "https://www.sonatype.com" },
    { name: "WhiteSource (Mend)", url: "https://www.mend.io" },
  ]

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">{t('compliance.title')}</h1>
      
      <Tabs defaultValue="policy" className="space-y-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="policy">{t('compliance.tabs.policy')}</TabsTrigger>
          <TabsTrigger value="metrics">{t('compliance.tabs.metrics')}</TabsTrigger>
          <TabsTrigger value="knowledgebase">{t('compliance.tabs.knowledgebase')}</TabsTrigger>
          <TabsTrigger value="tools">{t('compliance.tabs.tools')}</TabsTrigger>
        </TabsList>

        {/* Policy Tab */}
        <TabsContent value="policy" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('compliance.policy.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <section>
                  <h3 className="font-medium mb-2">{t('compliance.policy.license.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('compliance.policy.license.content')}
                  </p>
                </section>
                <section>
                  <h3 className="font-medium mb-2">{t('compliance.policy.review.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('compliance.policy.review.content')}
                  </p>
                </section>
                <section>
                  <h3 className="font-medium mb-2">{t('compliance.policy.contact.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('compliance.policy.contact.content')}
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Metrics Tab */}
        <TabsContent value="metrics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('compliance.metrics.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <section>
                  <h3 className="font-medium mb-3">{t('compliance.metrics.kpi.title')}</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-2xl font-bold">98%</div>
                        <p className="text-xs text-muted-foreground">{t('compliance.metrics.kpi.license')}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-2xl font-bold">24</div>
                        <p className="text-xs text-muted-foreground">{t('compliance.metrics.kpi.tickets')}</p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-4">
                        <div className="text-2xl font-bold">4.2天</div>
                        <p className="text-xs text-muted-foreground">{t('compliance.metrics.kpi.resolution')}</p>
                      </CardContent>
                    </Card>
                  </div>
                </section>
                <section>
                  <h3 className="font-medium mb-2">{t('compliance.metrics.trends.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('compliance.metrics.trends.content')}
                  </p>
                </section>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Knowledgebase Tab */}
        <TabsContent value="knowledgebase" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>{t('compliance.kb.backend.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <section>
                    <h3 className="font-medium mb-2">{t('compliance.kb.backend.deps.title')}</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>{t('compliance.kb.backend.deps.item1')}</li>
                      <li>{t('compliance.kb.backend.deps.item2')}</li>
                      <li>{t('compliance.kb.backend.deps.item3')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-medium mb-2">{t('compliance.kb.backend.build.title')}</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>{t('compliance.kb.backend.build.item1')}</li>
                      <li>{t('compliance.kb.backend.build.item2')}</li>
                      <li>{t('compliance.kb.backend.build.item3')}</li>
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>{t('compliance.kb.frontend.title')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <section>
                    <h3 className="font-medium mb-2">{t('compliance.kb.frontend.comp.title')}</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>{t('compliance.kb.frontend.comp.item1')}</li>
                      <li>{t('compliance.kb.frontend.comp.item2')}</li>
                      <li>{t('compliance.kb.frontend.comp.item3')}</li>
                    </ul>
                  </section>
                  <section>
                    <h3 className="font-medium mb-2">{t('compliance.kb.frontend.build.title')}</h3>
                    <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                      <li>{t('compliance.kb.frontend.build.item1')}</li>
                      <li>{t('compliance.kb.frontend.build.item2')}</li>
                      <li>{t('compliance.kb.frontend.build.item3')}</li>
                    </ul>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Tools Tab */}
        <TabsContent value="tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('compliance.tools.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scaTools.map((tool) => (
                  <div key={tool.name} className="flex items-center justify-between p-2 hover:bg-muted rounded-lg">
                    <span className="font-medium">{tool.name}</span>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center"
                    >
                      {t('compliance.tools.visit')} <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}