---
draft: false
title: "The New Frontiers of Application Security: How Understanding the Origins of AppSec Helps Predict Its Future."
snippet: "Application layer is increasingly the Achilles heel of security: eight out of the top ten data breaches in 2023 resulted from AppSec failures. With the AI-driven transformation in software development practices and the rise of AI assistants, AppSec teams face new challenges and must keep up with the increased code velocity and attack complexity. In this article, I argue that LLMs provide radically new ways to analyze the code base and process unstructured data to perform AppSec functions. I identify several opportunities for AppSec transformation and present a framework to identify the role of incumbents, disruptors, and AI-native startups."
image: {
    src: "https://devarmor-website.s3.us-west-2.amazonaws.com/appsec-market-map-2024.png",
    alt: "Application Security is going through a transformation"
}
publishDate: "2024-05-21 11:39"
category: "AppSec"
author: "Amir Kavousian"
tags: [appsec, ai]
---

AppSec is going through a transformative moment. For the first time in over a decade, teams are reassessing their AppSec toolchain, with many large incumbents experiencing [high churn](https://www.reddit.com/r/devops/comments/1964zqj/is_snyk_worth_the_price/). At the same time, disruptors leverage new technologies such as GenAI and reachability analysis to capture market share.

To better understand what is happening in the AppSec world, it is worth reviewing the origins of AppSec, the forces behind the ongoing transformation, and what lies ahead for AppSec.

### The Origins

The Application Security Engineer (AppSec Engineer) role emerged over the last few decades, primarily as a response to software applications' [increasing complexity and security needs](https://newsletter.pragmaticengineer.com/p/security-engineering). Specifically, the need for dedicated AppSec Engineers increased due to several key factors:

1. **Complexity of Modern Software**: Modern applications often involve [complex architectures](https://www.infoworld.com/article/3639050/complexity-is-killing-software-developers.html), including microservices and third-party integrations, which create numerous potential points of vulnerability. Moving to cloud infrastructure introduced a growingly complex attack surface.
2. **Shift in Threat Landscape**: As attackers increasingly targeted application layers directly, it became apparent that specialized knowledge of software development and security was needed to defend against these threats effectively.
3. **Regulatory and Compliance Pressures**: With the introduction of various compliance requirements (like PCI DSS for payment systems, HIPAA for healthcare, and GDPR for data protection in Europe), organizations needed experts who could ensure applications met legal and regulatory standards for security. Additionally, FedRAMP continues to expand as suppliers begin demanding it from each other.
4. **Integration of Security into SDLC**: There was a growing recognition of the importance of [integrating security considerations throughout the Software Development Life Cycle (SDLC)](https://handbook.gitlab.com/job-families/security/application-security/) rather than treating it as an afterthought. This integration required professionals who not only understood security but also had a deep familiarity with software development practices. This occurred while the SDLC itself was changing with the introduction of Agile and DevOps practices.
5. **Evolving Development Practices**: The rise of agile and DevOps methodologies changed how software was built, requiring [more dynamic and integrated approaches](https://www.veracode.com/blog/secure-development/evolution-application-security-cloud-native-world-qa-chris-wysopal) to security.

The creation and evolution of the Application Security Engineer role reflect the broader understanding that effective security must be baked into the application development process and continuously managed to help development teams ship secure software faster.

### The Challenges

Over time, AppSec has faced challenges that have made it harder to stay true to its original goals. These challenges include:

1. **Scaling Security Practices**: As organizations grow and their software portfolios expand, scaling security practices to keep up with development throughput and larger codebases becomes difficult. This scaling issue is compounded by constantly introducing new technologies and platforms, which require different security approaches and expertise.
2. **Talent Shortage**: The demand for AppSec engineers still [far outweighs](https://techbeacon.com/security/application-security-your-career-5-key-areas-focus) the supply. The shortage of skilled security professionals can delay security processes, from threat modeling and vulnerability assessments to incident response. This talent gap also puts pressure on existing staff, potentially leading to burnout and reduced effectiveness.
3. **Keeping Up with Emerging Threats**: The threat landscape constantly evolves, with new vulnerabilities and attack vectors emerging regularly. Keeping up with these changes, understanding their implications, and updating security measures accordingly is a continuous challenge.
4. **Alert Fatigue**: Security tools often generate many false positives. Sorting through these to identify genuine threats can be time-consuming and labor-intensive, detracting from addressing real vulnerabilities and often leading to alert fatigue (and ignore) among security teams.
5. **Managing Security Debt**: Organizations often accumulate "security debt" — unresolved security flaws that persist as new features are prioritized. This backlog can become unmanageable over time, posing a significant risk. Addressing security debt without slowing down new development is a balancing act that many organizations struggle with.
6. **Tool Sprawl**: Enterprises use an [average of 45 security tools](https://www.cio.com/article/189489/when-more-is-not-necessarily-better-the-impacts-of-multiple-security-tools.html). Having too many security tools [wastes budgets and results in sub-par performance](https://www.forbes.com/sites/forbestechcouncil/2022/08/10/cybersecurity-budgets-are-wasted-by-an-overabundance-of-tools/?sh=27ca6ed76e75).

### The Coming Wave

We are in the middle of a generational shift in how software is written and delivered. GitHub Co-Pilot now has [1.8 million paid subscribers](https://www.linkedin.com/posts/ashtom_after-reporting-revenue-accelerated-to-over-activity-7189396637922787329-vJsN/), growing 35% quarter over quarter. [92% of developers](https://github.blog/2023-06-13-survey-reveals-ais-impact-on-the-developer-experience/) use AI coding tools, and [40% of submitted code](https://www.microsoft.com/en-us/Investor/events/FY-2023/Morgan-Stanley-TMT-Conference) is a direct output of AI tools. More AI-generated code means more attack surface area, higher throughput, and more strain on App Sec teams. This results in longer security review cycles and a lower percentage of major code changes that go through security review.

Attackers are increasingly targeting the application layer. Application vulnerabilities are the main reason for most recent breaches: [eight out of the top ten data breaches](https://www.verizon.com/business/resources/reports/dbir/#resources) in 2023 resulted from AppSec failures.

The software teams of the future will look radically different from the existing model. Several roles within SDLC are already experiencing unprecedented automation. For example, modern cloud platforms like [Vercel](https://vercel.com/blog/what-is-vercel) and [Netlify](https://docs.netlify.com/platform/overview/) are transforming DevOps by automating code deployment and cloud configuration. Disruptive startups, such as [Meticulous](https://www.meticulous.ai/), are automating user testing and QA. Companies have eliminated or significantly reduced roles such as scrum masters and middle management. AppSec is slower in joining this transformation wave because of its hyper-specialization and the need to understand business logic. However, LLMs provide radically new ways to interact with the code base and the unstructured data. What was once unimaginable is now within the realm of possibility with the use of LLMs and techniques such as [RAG](https://arxiv.org/abs/2005.11401), [chain-of-thought](https://arxiv.org/abs/2201.11903), and [multi-modal reasoning](https://arxiv.org/abs/2307.12626).

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/software-orgs-transformation-ai-old-2.png" alt="Software org transformation"/>
  <figcaption style="text-align: center;"><em>In the old software org, each development team had dedicated support roles such as security engineer, QA engineer, and scrum master.</em>
</figcaption>
</figure>

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/software-orgs-transformation-ai-new-1.png" alt="Software org transformation"/>
  <figcaption style="text-align: center;"><em>AI assistants are changing the fabric of development teams. Embedded AI agents remove the need for dedicated support roles, significantly reducing headcount requirements while increasing development velocity.</em>
</figcaption>
</figure>

Within AppSec tools, we are seeing a few emerging trends.

#### Iterative improvement

The current generation of code scanners was first introduced in the mid-to-late 2010s. During this time, tools like [Snyk](https://snyk.io/) and [Semgrep](https://semgrep.dev/) offered new workflows ([Shift Left](https://owasp.org/www-project-devsecops-guideline/latest/00a-Overview), [developer-driven security](https://www.rsaconference.com/library/blog/2016-is-the-year-of-developer-driven-security)) and [customized rules](https://semgrep.dev/docs/semgrep-code/policies) to reduce the time to identify vulnerabilities and alert developers earlier in the SDLC. However, tool setup and configuration are major obstacles to implementing AppSec tools. Some tools like [Semgrep and CodeQL](https://blog.doyensec.com/2022/10/06/semgrep-codeql.html) that are based on rule sets require considerable effort to set up and maintain. The new generation of code scanners focuses on reducing false positives, one of the biggest pain points for AppSec tools. Notable startups in this space are:

- **SCA** with [Reachability Analysis](https://www.endorlabs.com/learn/5-types-of-reachability-analysis-and-which-is-right-for-you): [Endor Labs](https://www.endorlabs.com/), [Coana](https://www.coana.tech/), [Backslash](https://www.backslash.security/), [Oligo](https://www.oligo.security/), [Kodem](https://www.kodemsecurity.com/)
- **DAST**: [StackHawk](https://www.stackhawk.com/) (developer-driven dynamic analysis), [Escape](https://escape.tech/), [Pynt](https://www.pynt.io/), [Akto](https://www.akto.io/)
- **Secrets Scanning**: [GitGuardian](https://www.gitguardian.com/), [Arnica](https://www.arnica.io/)
- **Container Scanning**: [ChainGuard](https://www.chainguard.dev/), [RapidFort](https://www.rapidfort.com/), [Kodem](https://www.kodemsecurity.com/), [Oligo](https://www.oligo.security/)
- **Correlation**: ArmorCode’s new [AI Correlation](https://www.armorcode.com/blog/introducing-armorcode-ai-correlation) feature aims to help make AppSec easier by using ML and NLP to identify and correlate high-signal findings across an enterprise’s AppSec tools ecosystem to de-duplicate findings, identify root causes of vulnerabilities, and prioritize the most critical issues. [Phoenix Security](https://phoenix.security/), [Opus](https://www.opus.security/), [Dazz](https://www.dazz.io/), [DevOcean](https://www.devocean.security/)

#### Consolidation

Theoretically, there are 8 different types of code scans that AppSec needs to run. To manage this complexity, a new crop of startups and tools has been growing that integrates all aspects of code scanning and AppSec data under one app. These tools are called [Application Security Posture Management (ASPM)](https://pulse.latio.tech/p/defining-aspm) and have grown exponentially since 2022. Notable startups in this space are [Ox Security](https://www.ox.security/), [Apiiro](https://apiiro.com/), [Aikido](https://www.aikido.dev/) and [Legit Security](https://www.legitsecurity.com/). Incumbents such as Snyk have also entered this space too, but have had mixed results trying to enter new scanning territories while building out their point products

#### Automation

The most cutting-edge startups in the AppSec world are leveraging AI and ML to automate some aspects of AppSec. Within this group, there are two classes of products:
- **Code fixers via generic patches**: these solutions create generic patches for common vulnerabilities, specifically for OSS dependencies with known vulnerabilities. [Seal Security](https://www.seal.security/), [Grit](https://about.grit.io/), and [Moderne](https://www.moderne.io/) are innovative startups in this space.
- **Auto-remediators via specific fixes**: solutions in this group create automated vulnerability remediation via AI-generated code for specific instances within an application. Notable startups include [Mobb](https://mobb.ai/), [Corgea](https://corgea.com/), and [Pixee](https://www.pixee.ai/). Incumbents such as [GitHub](https://github.blog/2024-03-20-found-means-fixed-introducing-code-scanning-autofix-powered-by-github-copilot-and-codeql/) are also entering this space.

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/appsec-market-map-2024.png" alt="AppSec Market Map in 2024"/>
  <figcaption style="text-align: center;"><em>AppSec market in 2024. Disruptors continue to take market share from incumbents by addressing user pain points, automation, and tool consolidation. The new entrants are building AI-native platforms that unlock value in new areas such as auto-remediation and threat modeling.</em>
</figcaption>
</figure>


### The Untapped Potential of AppSec Tools: Threat Modeling

One of the major reasons for the high rate of false positives in AppSec tools is the [lack of business context](https://news.ycombinator.com/item?id=26299218). The missing business context can be traced to:

- **Lack of data integration**: Security tools have historically only accessed the code base, whereas business logic has resided in documentation platforms such as Atlassian, Google Docs, and Notion.
- **Missing technology to capture, organize, and reason about the data**: Synthesizing business logic into a format that is actionable for AppSec tools has been the job of experienced AppSec engineers who can translate business risks into security policies and controls. Transforming unstructured data into a natural language format was not technologically possible before the introduction of LLMs.

The missing link between the business context and security is the [threat model](https://owasp.org/www-community/Threat_Modeling). A threat model enables informed decision-making about vulnerabilities and a prioritized list of security improvements to the application's design and implementation. Furthermore, as vulnerability scanning gets closer to developers, application security teams will spend more time on threat modeling and architecture review.

The threat model is often used as input for developers and AppSec engineers to filter out false positives and prioritize vulnerabilities. As AppSec tools grow in their ability to ingest natural language, the threat model can used as input for AppSec tools to reduce false positives, improve signal-to-noise ratio, and act as a decision tool for autonomous agents or humans.

AI can streamline the threat modeling process by automatically generating threat models based on the application's architecture, codebase, and unstructured data. It can automatically update threat models, creating a living and dynamic threat model. This saves companies hundreds of thousands of dollars annually spent on third-party consultants and [tooling](https://www.techtarget.com/searchsecurity/tip/Top-threat-modeling-tools-plus-features-to-look-for) for threat modeling. It can potentially disrupt a [$2 Billion market](https://www.marketsandmarkets.com/PressReleases/threat-modelling-tools.asp) and bring billions of dollars of productivity gains for enterprises.

Agentic AI offers a unique opportunity to automate AppSec operations, including threat modeling, design evaluation, and feedback. Frameworks such as [Autogen](https://microsoft.github.io/autogen/), [AutoGen Studio](https://autogen-studio.com/), and [Crew AI](https://www.crewai.com/) provide the foundation for building such agents. These agents have already demonstrated the [ability to do threat modeling](https://chuckj67.medium.com/building-a-smarter-infosec-the-role-of-agentic-ai-in-modern-cyber-defense-2b4b57d779a6). However, commercializing this concept requires a significant amount of effort in building workflows to capture, organize, and process information from multiple sources.

### Summary

AppSec has come a long way from the early days of miscellaneous scripts cobbled together by security engineers. Nowadays, companies use tens of different products to run their AppSec programs, from code scanners to vulnerability management tools. Along the way, some of these tools have seen incremental improvements, resulting in more streamlined workflows and customized security tests. However, the level of effort and expertise to run these tools has increased with the increase in customization, resulting in a higher overhead for AppSec teams to configure and run AppSec tools. With the AI-driven transformation in software development practices and the rise of AI copilots, AppSec teams face new challenges and must keep up with the increased code velocity.

The traditional AppSec tools are built for a different time and cannot directly migrate to the new AI era. AI has the power to transform AppSec along these dimensions:

- **Enhanced Code Understanding**: Effective application security review starts with a deep understanding of the code in the context of business logic. LLMs can grasp the nuances of codebases, mirroring the expertise of a seasoned AppSec engineer but at scale and speed.
- **Automation and Operationalization**: AI can reduce the operational load that currently weighs down AppSec teams, especially manual or workflow-related, like code review, and vulnerability management.
- **Threat modeling and formalizing business logic**: Threat modeling is a manual, slow, and expensive process that involves collecting data from structured and unstructured sources, understanding business logic, and formalizing risk management. LLMs provide the tools to capture, analyze, and reason about unstructured data and translate it to a normalized format for structured decision-making.

### Acknowledgement

I want to thank [James Berthoty](https://www.linkedin.com/in/james-berthoty/) of [Latio](https://www.latio.tech/) for his thoughtful review of the drafts of this article. I also want to thank [Ian Livingstone](https://www.linkedin.com/in/irlivingstone/), [Will Bengtson](https://www.linkedin.com/in/william-bengtson/), [Michael Coates](https://www.linkedin.com/in/mcoates/), [Frank Wang](https://www.linkedin.com/in/frankw1/), and [Yasir Ali](https://www.linkedin.com/in/yasirnyc/) for the great conversations that helped shape and validate various ideas in this article.
