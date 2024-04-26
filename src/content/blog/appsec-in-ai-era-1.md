---
draft: false
title: "Redefining Application Security in The AI Era."
snippet: "Application Security (AppSec) is the most labor-intensive function in cybersecurity. Despite significant advancements in tools and automation, AppSec remains a notable bottleneck in the Software Development Lifecycle (SDLC). Traditional AppSec is slow and expensive. Shift Left tools have failed to empower developers to take charge of the security of applications. Security budget moderation and AI adoption are top priorities for executives."
image: {
    src: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1",
    alt: "application security is complicated"
}
publishDate: "2022-11-08 11:39"
category: "AppSec"
author: "Amir Kavousian"
tags: [appsec, ai]
---

Application Security (AppSec) is the most labor-intensive function in cybersecurity. Despite significant advancements in tools and automation, AppSec remains a notable bottleneck in the Software Development Lifecycle (SDLC). The Shift Left philosophy recommends running security checks earlier in the SDLC, making fixing issues cheaper and faster. However, existing Shift Left tools have failed to solve the fundamental issue of application security: developers have little to no context of security considerations, while security engineers have a very limited context of the application code, architecture, and infrastructure. As a result, AppSec has become a linear, labor-intensive process that requires time and effort from both AppSec teams and developers.

In the past few months, I have spoken with more than 60 practitioners to identify top AppSec pain points from the engineering teams’ perspective. Some of these organizations don’t yet have a dedicated AppSec team and are using Shift Left tools to help identify vulnerabilities in their code. Some others have mature AppSec programs with dedicated teams. A few trends showed up in most of my conversations with these practitioners that could help shed light on the shortcomings of current AppSec programs and why we need to rethink AppSec, especially in the AI era.

## Traditional AppSec is slow and expensive

- AppSec teams rely heavily on manual work for tasks such as code reviews, alert triage, inventory asset management, threat modeling, communication, training, and awareness.

- Security reviews take multiple days, delaying launches and causing friction. As the number of programming languages and frameworks increases, it is becoming increasingly challenging for AppSec engineers to keep up with the changes.

- Most organizations admit to regularly bypassing security reviews for major code changes to avoid delays.

## Shift Left tools have failed to empower developers to take charge of the security of applications

- Most Shift Left tools have low signal-to-noise ratios and require specialized security knowledge to configure and operate. As a result, AppSec engineers, not developers, run Shift Left tools in most organizations.

- Teams rarely act on AppSec tools’ alerts due to a lack of time, limited understanding of security best practices, and alert fatigue.

- Managing security debt is critical for many engineering and security teams, with prioritization being a major blocker. Reachability analysis can help filter out the vulnerabilities that can be temporarily ignored, but it does not solve the problem of operationalizing tech debt paydown.

- To manage security debt, teams need a clear framework for prioritizing, assigning, planning, and coordinating remediation work. AppSec engineers currently do this manually, effectively making them assume the role of a project manager.

- Remediation is slow and creates internal friction. Organizations are looking for solutions that (a) help them identify real vulnerabilities and (b) support developers remediate issues without excessive handholding from AppSec teams.

## Security budget moderation and AI adoption are top priorities for executives

- To avoid delays in software delivery, organizations have resorted to hiring more AppSec engineers to work directly with engineering teams.

- The current practice of hiring large AppSec teams to manage security for engineering teams has resulted in inefficiency, organizational bloat, and friction.

- AppSec engineering has become highly specialized because it requires various skills across software engineering, security, DevOps, and compliance. The high entry bar has led to a significant talent shortage in the AppSec field, driving up salaries and the cost of talent acquisition.

- With the increased adoption of AI tools, AppSec is [top-of-mind for executives](https://x.com/edsim/status/1778401727714037856), while organizations are looking to reduce their security spend in response to the current economic environment.

In short, traditional, manual AppSec processes are slow and expensive. Shift Left tools add more complexity instead of helping engineers fix vulnerabilities. Companies want to change how they handle app security to keep their security teams lean while transitioning to the AI era.

Automation is the only way security teams can keep up with engineering, especially as AI co-pilots drive development velocity up. Emerging technologies such as LLMs have the potential to fundamentally revolutionize AppSec by automating highly manual and time-consuming tasks. In the next article in this series, I will expand on the opportunities for the future of AppSec in the AI era.
