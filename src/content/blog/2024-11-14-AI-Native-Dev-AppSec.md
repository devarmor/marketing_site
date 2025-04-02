---
draft: false
title: "AI-Native Development and the Future of AppSec"
snippet: "AI-Native Development helps teams write code quickly. However, we need to address application security and compliance needs. In my view, the AI-Native development environments will support code security, SDLC integration, and automated vulnerability detection. To adapt to the new workflows of predominantly AI-Driven development, the new generation of AppSec tools need to support dynamic threat modeling, and automated security design review and enforcement.
" 
image:
  {
    src: "https://devarmor-website.s3.us-west-2.amazonaws.com/Developer-Throughput-vs-Security-Bandwidth.png",
    alt: "Security reviews are the most common bottleneck in SDLC.",
  }
publishDate: "2024-11-14 11:39"
category: "AppSec"
author: "Amir Kavousian"
tags: [appsec, ai]
---

## What is AI-Native Development

The history of programming languages reveals a steady move toward higher abstraction, bridging machine code and human thought. [Domain-Specific Languages (DSLs)](https://martinfowler.com/dsl.html) address specific problem areas, while [Visual Programming](https://en.wikipedia.org/wiki/Visual_programming_language) and [Low-Code/No-Code platforms](https://hbr.org/2021/06/when-low-code-no-code-development-works-and-when-it-doesnt) enable application development with minimal coding, making software creation more accessible. [AI code generators](https://arxiv.org/abs/2107.03374), powered by Large Language Models (LLMs), mark the next step. By translating unstructured human input into executable code, they promise a more intuitive interface between human intent and software development.

The first wave of [AI code assistants](https://www.gartner.com/en/newsroom/press-releases/2024-04-11-gartner-says-75-percent-of-enterprise-software-engineers-will-use-ai-code-assistants-by-2028), like GitHub Copilot, focused on code completion by generating context-aware code snippets to complement developer input. Since its 2022 debut, Copilot has seen rapid adoption, growing its user base by [over 60% each quarter](https://www.microsoft.com/en-us/microsoft-365/blog/2024/03/14/bringing-copilot-to-more-customers-worldwide-across-life-and-work/) to exceed 1.3 million users within two years. Competitors such as [Codeium](https://codeium.com/), [Cursor](https://www.cursor.com/), [Tabnine](https://www.tabnine.com/), [Anysphere](https://anysphere.inc/), and [Continue.dev](https://www.continue.dev/) have since developed tools allowing for custom model selection or training on company-specific data.

More recently, a new category of platforms has emerged, aiming to automate broader programming tasks. These AI-Native Development tools, including [Augment](https://www.augmentcode.com/), [Magic.dev](https://magic.dev/), [Cognition Labs](https://www.cognition.ai/blog/introducing-devin), and [Poolside](https://www.poolside.ai/), go beyond code completion by generating entire functional components, pushing software development toward full automation.

## How Application Security Will Be Impacted by AI-Native Development

As we move towards a [predominantly AI-driven coding environment](https://www.theverge.com/2024/10/29/24282757/google-new-code-generated-ai-q3-2024), the AppSec toolchain needs to adapt to the new developer workflows. I believe the following trends will emerge as a result of the proliferation of AI Native Development.

### Developers will spend more time on system design and less on implementation

As AI abstracts implementation details, developers can shift their focus from the technical nuances of coding to solving core business problems. This evolution in software development emphasizes skills such as problem definition and system design over traditional coding expertise. On the other hand, human oversight will still play a critical role, with developers taking on responsibilities in code review and quality assurance to maintain robust and secure systems.

AppSec tools will need to adapt to this new workflow. While a significant number of AppSec tools focus on helping developers write more secure code (the “[Shift Left](https://www.fortinet.com/resources/cyberglossary/shift-left-security)” movement), there has been less development on tools that enable developers to design secure architectures and enforce the security requirements during development and in production (“[Shift Right](https://www.redhat.com/en/topics/devops/shift-left-vs-shift-right)”).

### Security reviews will become more critical

While AI-Native development platforms excel in tasks like documentation generation, code maintenance, and specification-driven development, they often lack comprehensive insights into security risks, business contexts, and architectural decisions.

Code scanners are great at finding security bugs such as misconfiguring an authentication method or using an insecure encryption algorithm. However, they are much less effective in finding a [different class of vulnerabilities](https://www.devarmor.com/blog/2024-07-09-vulnerability-types) that are caused by logical flaws in the application. Finding logical vulnerabilities (such as missing authentication) requires an understanding of the business context, security controls, and design principles that are outside the codebase.

To address these gaps, integrating system design and conducting thorough security design reviews are essential for building stable and secure systems.

- System Design: This involves creating a robust architecture that aligns with business objectives and anticipates potential security threats. Incorporating [security principles from the outset](https://www.redhat.com/en/blog/security-design-security-principles-and-threat-modeling) ensures that systems are resilient against attacks and function reliably.
- Security Design Review: This process entails evaluating the system's design to identify and mitigate security vulnerabilities before implementation. By assessing potential threats and applying security best practices, organizations [can prevent incidents and protect sensitive data](https://www.secopsolution.com/blog/the-importance-of-security-reviews-and-how-to-conduct-them).

By combining AI-driven development tools with system design and security reviews, AppSec tools empower development teams to ship secure software faster.

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/Developer-Throughput-vs-Security-Bandwidth.png" alt="Security reviews are the most common bottleneck in SDLC."/>
  <figcaption style="text-align: center;"><em>The gap in security coverage and delay in software releases widen as the team size grows.</em>
</figcaption>
</figure>

### Secure-by-Design mandates will drive the need for new security tools

The [Secure-by-design mandate](https://www.cisa.gov/securebydesign) represents a fundamental shift in the approach to cybersecurity, moving from reactive to proactive security measures. Secure by Design principles emphasize embedding security measures early in the [planning and development phase](https://franklyspeaking.substack.com/p/security-by-design-is-hard) of a product.

Since AI-Native Development is heavily reliant on the application specs, it is important to ensure the architecture design of the application is secure. In the new AI-Native workflow, design is still a human-provided input and thus is error-prone and requires validation. The next generation of AppSec tools need to assist developers with architectural design reviews, and act as assistants during the design phase.

To address these needs, a new generation of security tools need to:

- Perform [threat modeling during the design phase](https://www.devarmor.com/blog/2024-08-15-threat-modeling-automation-1)
- Conduct automated security review and testing throughout the development process, informed by pre-approved design primitives and secure building blocks
- Enforce security policies and standards across the software development lifecycle

### AI-Driven Development use cases will consolidate

[Contrary to the early claims](https://news.ycombinator.com/item?id=40008109) that AI-Native Dev tools can solve arbitrary tasks, there is no evidence that AI-Native Dev tools can support a "[prompt-to-application](https://machine-learning-made-simple.medium.com/did-the-makers-of-devin-ai-lie-about-their-capabilities-cdfa818d5fc2)" workflow as many hope they would do. Instead, I expect AI-Native Dev tools to specialize in a few distinct and targeted tasks, including:

- **Peripheral Tasks**: Tasks like [documentation generation](https://www.tessl.io/blog/from-the-ai-native-dev-ai-powered-documentation-insights-with-omer-rosenbaum-cto-of-swimm) are being streamlined by AI, enhancing efficiency in software development.
- **Code Maintenance and Migration**: Platforms such as [Moderne](https://www.moderne.ai/) and [Grit](https://about.grit.io/) are automating code refactoring and migration, reducing technical debt and improving code quality.
- **Specification-Driven Localized Development**: By utilizing domain-specific languages, product and software teams can define specifications that AI systems translate into localized components like APIs and microservices.

The implication is that developers still need to do the architecture design and then feed that into the AI-Native Dev tools to generate the code, one component at a time.

### Code generation and scanning will be commoditized

AI-Native Development is poised to [commoditize code generation](https://blog.9cv9.com/top-latest-ai-code-generator-statistics-and-trends-in-2024/). Developers are guaranteed to adopt AI-Native development, and security has to adapt. Since code scanning [happens inside the pipeline](https://snyk.io/learn/code-review/code-scanning/), Static Application Security Testing (SAST), Software Composition Analysis (SCA), Secrets detection, and Infrastructure as Code (IaC) scanning have to find a way to integrate.

On the other hand, the [crowded competitive landscape](https://www.vendr.com/blog/snyk-competitors-alternatives) of code scanners and the [growing popularity of open-source solutions](https://www.wiz.io/academy/open-source-code-security-tools) will make end-users [re-evaluate their budget allocation](https://cycode.com/blog/doing-more-with-less-how-to-improve-appsec-programs-when-budgets-decrease/), and increase their investment in high-return areas such as [secure-by-design and SDLC integration](https://venturebeat.com/security/top-five-takeaways-from-forresters-state-of-application-security-2024/).

### Design Primitives and Secure Building Blocks will be standardized and integrated into SDLC

The concept of "paved paths" originates from [Netflix's "paved road" methodology](https://www.youtube.com/watch?v=r1omxhxezrM), which emphasizes providing developers with standardized, opinionated defaults (design primitives, secure building blocks) to streamline workflows and enhance productivity. This approach has been adopted by companies like [Spotify](https://engineering.atspotify.com/2020/08/how-we-use-golden-paths-to-solve-fragmentation-in-our-software-ecosystem/) and [Google](https://cloud.google.com/blog/products/application-development/golden-paths-for-engineering-execution-consistency) to improve developer efficiency and scalability. By treating infrastructure, deployment, and security as products, these organizations have created standardized, user-friendly processes that developers are inclined to follow, leading to more consistent and efficient development practices.

In the new world of AI-Native development, these design primitives can be directly baked into the AI toolchain. Since the design primitives are customer-specific due to the custom risk profile and regulatory requirements of each company, I forsee two plausible scenarios for integrating secure-by-design into AI-Native development.

1. Customer-tuned models such as [Poolside](https://poolside.ai/vision) can directly code the design primitives into their AI model.
2. Generic models such as CoPilot would have to rely on the user input for each task to follow design primitives. The reliance on the accuracy and completeness of user input degrades user experience and increases the chances of errors and omissions.

Regardless of how the design primitives are communicated to the AI tool, a human-in-the-loop is still needed to verify implementation of design primitives. Furthermore, design primitives need to be associated with security controls to support compliance.

In short: the following tasks are currently not supported by any AppSec tool and I expect new AppSec tools to innovate in these areas:

- Translating security requirements into design primitives
- Validating the use of design primitives in the AI-generated code.

### Compliance automation will be integrated into SDLC

Compliance is a key driver for implementing security measures in the SDLC. AI-Native development environments can support compliance management through:

- **Regulatory Alignment Systems**: AI-driven tools can interpret and enforce compliance with relevant regulations and standards. In practice, this will likely be enforced via the design primitives integrated into the development toolchain.
- **Audit Trail Generation**: Implementing systems that automatically generate comprehensive audit trails for AI-driven development processes enhances transparency and accountability. This automation facilitates easier monitoring and auditing. This is the lowest hanging fruit for AI-Native development environments to implement.

### Verification becomes a critical component of the development workflow

AI-Native Development tools increase speed and efficiency, but they also bring new risks. Without robust verification, there's no way for teams to ensure that:

- AI-generated code performs its intended function without bugs or security vulnerabilities.
- Secure design primitives are faithfully implemented.
- Compliance requirements are consistently met.

In the context of AI-Native Development, a verifier is any tool, process, or mechanism that ensures the outputs of automated systems—whether code, designs, or configurations—are correct, secure, and aligned with business and security requirements.

Verifiers can take several forms:

- **Design Reviews**: Verifiers ensure that system designs align with security principles and business requirements. Automated and manual design reviews act as a verifier, confirming that the architecture is secure and robust.
- **Automated Testing Tools**: Validate that code behaves as expected under various conditions and environments. Integration tests, QA tests, penetration tests are some examples of these tests. Most of these tools use simulation and sandbox environments to run the entire application or specific components (outside-in).
- **Static and Dynamic Analysis Tools**: Identify vulnerabilities and verify compliance with secure coding practices, by analyzing the codebase (inside-out). Verifiers validate that design primitives and secure building blocks are correctly applied in AI-generated code, ensuring adherence to Secure-by-Design principles.
- **Human-in-the-Loop Validation**: Combine human expertise with automated checks for higher assurance. Manual reviews will still be critical, especially when deviations from established patterns are proposed or a new design pattern needs to be established. AppSec tools can support these reviews with contextual insights.
- **Continuous Verification**: Audit trails and automated compliance checks must be integrated within SDLC to ensure that all AI-driven processes align with regulatory requirements and company policies.

## Summary

AI-Native Development helps teams write code quickly. However, we need to address application security and compliance needs. While AI coding assistants can potentially commoditize code generation and integrate code scanning, they don’t fully address application security concerns. Most importantly, the application design, which is human-provided, will become even more of a crucial juncture for establishing security. In addition to that, implementation verification is still required to make sure AI platforms stay within the guardrails that security teams have specified for them, and for connecting the security results of generic models to a company specific standard.

With the [AI models’ performance stabilizing](https://www.linkedin.com/posts/olivermolander_artificialintelligence-scalinglaws-activity-7262432304587792384-yPY1/), it is now easier to create a compelling vision for the role of AppSec tools in the modern workflows facilitated by AI-Native development environments. In my view, the AI-Native development environments will support the following:

- **AI code security**: AI systems can potentially be trained to produce more secure code consistently if properly guided.
- **Integration**: The systematic approach of AI-powered code generation allows for integration of security testing and mitigation mechanisms.
- **Automated Vulnerability Detection**: AI systems can be trained to continuously scan code and infrastructure for security vulnerabilities.

To adapt to the new workflows of predominantly AI-Driven development, the new generation of AppSec tools need to support:

- **Intelligent Threat Modeling**: AppSec tools need to support automated, dynamic threat modeling and risk assessment. AI can assist in creating more comprehensive threat models in the following ways:
  1. Scenario generation: Automatically generating potential attack scenarios based on the application's architecture
  2. Risk assessment: Evaluating and prioritizing security risks in real-time as the codebase evolves
  3. Adaptive security measures: Suggesting security controls based on the evolving threat landscape
- **Security design review and enforcement**: With secure-by-design mandates and the increase in importance of design, AppSec tools need to enable the curation, implementation, and enforcement of approved design primitives and secure building blocks. This is done via automated security reviews that are tied to the threat model and integrated into the code review phase.

AI-Native Development accelerates code creation, but it also introduces risks that require robust verification. Verifiers ensure the correctness and security of AI-generated outputs by:

- Validating functionality and adherence to secure design principles.
- Continuously checking compliance with industry and regulatory standards.
- Providing human-in-the-loop oversight where automated checks fall short.

### Acknowledgements

I want to sincerely thank [Rami McCarthy](https://www.linkedin.com/in/ramimac/) and [Ian Livingstone](https://www.linkedin.com/in/irlivingstone/) for their feedback on drafts of this article.
