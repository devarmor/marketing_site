---
draft: false
title: "Threat Modeling Automation: Opportunities, Challenges, and the Role of AI"
snippet: "Threat modeling is one of the most critical processes in application security. AI can revolutionize this $1.6B market by processing unstructured data, comprehending the code base, and integrating threat modeling in the entire SDLC."
image:
  {
    src: "https://devarmor-website.s3.us-west-2.amazonaws.com/Gartner+Hype+Cycle+for+Application+Security+-+ANNOTATED.png",
    alt: "LLMs can automate large aspects of threat modeling",
  }
publishDate: "2024-08-30 11:39"
category: "AppSec"
author: "Amir Kavousian"
tags: [appsec, ai, threat-modeling, secure-by-design]
---

At [DevArmor](https://www.devarmor.com/), we believe threat modeling should be automated and democratized to improve application security and development velocity. In this two-part series, we share our vision for threat modeling automation. In the first part, we review the origins and current challenges of threat modeling, and the drivers for innovation in modern threat modeling. In part II, we share some principles that we believe to contribute to automating threat modeling.

## Origins

[Threat modeling](https://en.wikipedia.org/wiki/Threat_model) is a fundamental aspect of cybersecurity, with its roots in the risk assessment practices used by militaries and government agencies during World War II. Threat modeling is still a largely manual, ad-hoc and time-consuming process. While [73% of companies](https://www.securitycompass.com/reports/the-2023-state-of-threat-modeling/) said they do threat modeling of their software at least annually, only half said they do it for every release.

Threat modeling usually happens at the beginning of the development process as a sequential step in the engineering pipeline. This workflow was developed after the [waterfall](https://en.wikipedia.org/wiki/Waterfall_model) method, and is less iterative and flexible than the modern Agile and DevSecOps methodologies. Furthermore, threat models are often not updated throughout the development phase, which makes them out of date and not correctly representative of the real security risks faced by applications.

It is possible to train software developers to perform threat modeling (see [Adam Shostack](https://shostack.org/books/threat-modeling-book)’s work, for example). However, the training process requires security teams and developers to invest considerable time and effort.

Existing tools from [Microsoft](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool), [IriusRisk](https://www.iriusrisk.com/), [SD Elements](https://www.securitycompass.com/sdelements/) and [SecuriCAD](https://news.ycombinator.com/item?id=37222884) are geared toward security professionals, who spend a significant amount of time to process information from multiple sources, configure the tools, and generate outputs in specific formats. The next generation of threat modeling tools need to [democratize threat modeling](https://www.rsaconference.com/library/blog/threat-modeling-in-2023) to better fit modern engineering workflows and empower smaller teams and average developers to perform threat modeling.

## The Inflection Point

We are at the beginning of another inflection point in application development workflows. The introduction of AI assistants and code generators has exponentially accelerated application code throughput. [Application complexity has increased](https://towardsdev.com/the-importance-of-threat-modeling-in-secure-software-development-a10494b05d22) significantly thanks to the migration to the cloud, and the proliferation of microservices architecture. Code generation volume has [significantly increased since the introduction of AI tools](https://devops.com/does-using-ai-assistants-lead-to-lower-code-quality/). Current practices such as manual code reviews, linear design review, and manual threat modeling updates and follow ups (e.g., mitigating, testing, and monitoring activities) no longer scale in the AI era. We need a new way to enable developers to do threat modeling without a tight dependency on the security teams.

The next generation of threat modeling tools need to [democratize threat modeling](https://www.rsaconference.com/library/blog/threat-modeling-in-2023) to better fit modern engineering workflows, empower smaller teams and average developers to perform threat modeling as an integrated part of the SDLC, and support modern AppSec practices such as secure-by-design.

### Secure-by-Design

The security industry is going through a transformation beyond the DevSecOps trend that dominated the conversation in the [past 10-15 years](https://bccs.tech/devsecops-and-devops-everything-you-need-to-know/#:~:text=First%20There%20Was%20DevOps%E2%80%A6Then,innovation%20from%20start%20to%20finish.). There are several cases for why we need to move beyond DevSecOps; for example, read this [three-piece series](https://www.resourcely.io/post/death-of-devsecops-part-1-the-rise-of-cloud-and-devops) on the current state of DevSecOps and [this post](https://www.linkedin.com/posts/davidmytton_devsecops-activity-7221144484120510464-K28i/?utm_source=share&utm_medium=member_desktop) on the future of application security. The core idea is that we need to move from “detect-block-fix” workflow to “secure-by-design”, providing secure building blocks and empowering the developers to make security decisions via contextual information. Threat modeling empowers security teams and developers to communicate the risks and tradeoffs of technical decisions more effectively. It demonstrates the bigger picture of security decisions and acts as a “heads-up display” that delivers the right information at the right time.

### SDLC Integration

Threat modeling has historically been done sequentially within software design and development. It is not integrated into the SDLC, but is performed as a separate task that needs to be initiated by human actors. This increases the risk that some major technical changes may go through the pipeline without proper security review. In most scenarios, developers reach out to the security team after the feature is already developed, and ask for a threat model. Architectural changes that become required as a result of threat modeling after the design phase introduce release delays and cause friction between the development and security teams. We need to integrate threat modeling with SDLC and enable continuous threat modeling to keep up with development velocity.

Threat modeling can have many use cases beyond the application design phase:

| SDLC Phase | Threat Model Activities                                                              | Threat Model Uses                                                                                                          |
| :--------- | :----------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| Design     | Generate threat model                                                                | Improve application design and architecture for security. <br/>Specify security controls, requirements, and testing plans. |
| Develop    | Update threat model based on design updates                                          | Specify rules for code reviews and scanners                                                                                |
| Test       | N/A                                                                                  | Inform pen-testing requirements.                                                                                           |
| Deploy     | N/A                                                                                  | Inform pen-testing requirements. <br/>Specify security controls.                                                           |
| Monitor    | Update threat model based on updated business risks and threat intelligence reports. | Inform pen-testing requirements, configure threat detection tools.                                                         |

### Automated Threat Modeling

Threat modeling has historically been a manual process. It requires coordination and collaboration across silos (eng and security), relies on unstructured data sources, and needs an understanding of the application architecture and security requirements which usually not all reside within a single team. It also includes follow-up activities such as mitigation, testing, documenting, and monitoring that are time-consuming and labor-intensive. To scale up threat modeling and accelerate development, we need to introduce [automation](https://www.oreilly.com/library/view/threat-modeling/9781492056546/ch04.html#idm46020425743928).

Automated Threat Modeling makes it easier and faster to threat model, unlocking considerable value by allowing software teams to do threat modeling on every major engineering change.

One of the most challenging steps in automating threat modeling is to infer software design based on its codebase. Previously, [research projects](https://www.semanticscholar.org/paper/A-survey-and-categorization-of-program-techniques-Wei/d3170f7dc9f70a01c8fb7295125e0eabf27674a0) and [commercial solutions](https://publica.fraunhofer.de/entities/publication/b854519e-36bd-4531-98d7-ee7fd142fdce/details) have attempted to solve this problem. The next wave of threat modeling tools have the benefit of using a fundamentally different tech stack: Large Language Models (LLMs). LLMs can help process unstructured data such as security policies, trust boundary descriptions, existing controls, and other inputs to infer the application design from the codebase in a way that was not possible before. LLMs, [Agents](https://www.insightpartners.com/ideas/ai-agents-disrupting-automation/) and Multi-Agent Models are enabling workflows that were deemed impossible only a couple of years ago.

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/Gartner+Hype+Cycle+for+Application+Security+-+ANNOTATED.png" alt="Automated Threat Modeling is on the horizon"/>
  <figcaption style="text-align: center;"><em>Gartner identifies automated threat modeling on its way to reach marketability. AI can accelerate automated threat modeling.</em>
</figcaption>
</figure>

## Recent Innovations

In recent years, a few open-source innovative tools have attempted to automate some aspects of threat modeling and assist developers to take the lead on threat modeling activities. These tools fall into two primary categories: tools that allow threat model representation as code, and tools that offer a user interface to describe applications and generate threat models.

### Threat Model As Code

The idea is to store threat modeling inputs and outputs in the codebase, for better visibility, revision management, and developer workflow integration. A few notable open-source tools that support threat model as code are:

- [Pytm](https://owasp.org/www-project-pytm/) is an [open-source](https://github.com/izar/pytm) OWASP project led by [Izar Tarandach](https://www.linkedin.com/in/izartarandach/). Users define the application architecture in Python using Pytm’s predefined objects. Then, Pytm generates a Data Flow Diagram (DFD) and a Sequence Diagram, and generates a threat model report. Pytm’s most recent addition, its [ChatGPT App](https://chatgpt.com/g/g-soISG24ix-pytmgpt), creates Pytm’s Python code based on a natural language description of the application.
- [Threat Spec](https://threatspec.org/) is an [open-source](https://github.com/threatspec/threatspec) project that has developers and security engineers write threat modeling annotations as comments inside source code, then dynamically generates reports and data-flow diagrams from the code.
- [Jupyter Threat](https://open-security-summit.org/sessions/2022/mini-summits/dec/threat-modeling/threat-modelling-as-code-v/) is an [open-source](https://github.com/P3tra-WP/Jupyter-Threat) threat modeling tool that aims to integrate Threat Modeling into the software development pipeline. Jupyter Threat can be configured and run from inside the Jupyter Notebook interface, and generates the threat model output in [machine-readable JSON](https://github.com/P3tra-WP/threat-modeling-as-json), Markdown, or Mermaid formats that can be stored alongside code. It generates attack trees in Mermaid format and PlantUML schema.
- [Attack Tree](https://attacktree.online/) and the associated open-source threat modeling toolkit [Theagile](https://threagile.io/) allow developers to define the application architecture in YAML and then generate a list of potential attacks and data flow diagrams using the threat modeling toolkit.

### GUI and Diagramming

A few open-source projects have been introduced to implement modern threat modeling practices, including:

- [Threat Dragon](https://owasp.org/www-project-threat-dragon/) is an OWASP [open-source](https://github.com/OWASP/threat-dragon) led by [Mike Goodwin](https://www.linkedin.com/in/dr-mike-goodwin/), [Jon Gadsden](https://www.linkedin.com/in/jon-gadsden/), and [Leo Reading](https://www.linkedin.com/in/leoreading/). It has a GUI where users can create an architecture diagram to define the boundaries of the system and data flow and attach specific threats to each component. Threat Dragon generates threat modeling reports, diagrams, and implements a rule engine to auto-generate threats and their mitigations.
- [Gram](https://github.com/klarna-incubator/gram) is a threat diagramming tool developed by the Klarna security team and open-sourced. It enables collaborative editing with multiple users, couples with the asset inventory, and offers automatic suggestions based on the existing tech stack.
<!-- - SecureFlag’s [ThreatCanvas](https://blog.secureflag.com/2024/07/25/create-detailed-threat-models-with-threatcanvas/) educates developers to perform threat models, and uses AI to help generate architecture diagrams.
- Security Compass’ [SD Elements](https://www.securitycompass.com/sdelements/threat-modeling/) works with existing diagrams or a wizard-type survey to gather security requirements and create threat models.
- [Devici](https://devici.com/) allows developers to generate the flow diagrams in its UI, and then generates threat models based on it. -->
- [Threat Composer](https://github.com/awslabs/threat-composer?tab=readme-ov-file) is an open-source application supported by [AWS](https://catalog.workshops.aws/threatmodel/en-US) that implements Adam Shostack's [Four-Question Frame for Threat Modeling](https://github.com/adamshostack/4QuestionFrame).

### Self-Serve Threat Modeling

[Self-serve threat modeling](https://www.youtube.com/watch?v=gJuOXoafP5Y) is a key enabler of the modern AppSec workflow. It goes beyond DevSecOps and Shift Left movements by aligning security awareness and application knowledge in developers’ workflows, during design and development phases. The idea is familiar: the sooner we inform developers of the security implications of their technical choices, the faster and cheaper it is to fix potential issues. Developers know their features the best and, when given the education and training for it, can generate threat models on their own. Self-serve threat modeling considerably reduces the amount of linear coordination (meetings, Slack messages, manual reviews) that is needed to unblock the developers.

Beyond productivity gains, self-serve threat modeling will also contribute to improved engineering culture (developers “owning” security as part of their engineering excellence principles), awareness (developers referring to threat modeling as one of their regular activities), and faster releases (less sequential iteration between security and developer teams).

## Future of Threat Modeling and the Role of AI

AI can help solve some of the technical issues that have hindered threat modeling automation, such as processing unstructured data or code comprehension. At the same time, AI introduces new challenges that are unique to itself, such as hallucination and non-deterministic nature of its output. The [rate of recent improvements in AI output](https://hai.stanford.edu/news/ai-index-state-ai-13-charts), and the introduction of methods such as [RAG](https://arxiv.org/abs/2005.11401), [Chain-of-Thought](https://arxiv.org/abs/2201.11903), and [Multi-Modal Reasoning](https://arxiv.org/abs/2307.12626) gives us, at DevArmor, confidence that the net effect of AI on threat modeling automation is positive, and it can accelerate automated threat modeling through the hype cycle to make it a viable commercial application earlier than what Gartner predicts.

Since the introduction of Large Language Models, a few solutions for using LLMs to inform and automate threat modeling have been proposed. [STRIDE GPT](https://open-security-summit.org/sessions/2024/mini-summits/jan/threat-modeling/ai-driven-threat-modelling-with-stride-gpt/) is an first open-source AI-first threat modeling tool that uses LLMs to generate a threat model, based on a user-provided description of the application.

The next step in using LLMs to accelerate threat modeling adoption is to incorporate code comprehension to inform the threat modeling process. By processing existing code and distilling application description from it, LLMs can assist threat modelers in describing a system. Furthermore, code comprehension can help incorporate threat model insights into the security review process, by identifying when implementation deviates from intended design per threat model controls and mitigation recommendations.

By incorporating a logical understanding of the codebase, future automated threat modeling can improve the speed, accuracy, and cadence of threat modeling activities. AI can also help with generating data flow diagrams and threat scenarios.

## Summary

Threat modeling is one of the most critical processes in application security. The recent transformation in software development has put threat modeling at the center of a new automation push, as security teams try to do more with smaller teams.

Large Language Models unlock significant potential to revolutionize threat modeling by automatically processing unstructured data, comprehending the code base at the logical level, and enabling fast iteration cycles by generating output in several formats.

In this article, we reviewed the origins and state of threat modeling, and presented a roadmap for future innovations. The most significant elements of this transformation are:

- LLMs can significantly speed up threat modeling process by processing **structured and unstructured data**. LLMs ability to understand code allows them to comprehend business logic and imply application architecture directly from the codebase. Multi-modal analysis enables LLMs to process detailed architecture diagrams with little human effort. Natural language processing capabilities allow LLMs to work directly with the documentation or descriptions of the applications to generate first-pass threat models. This will significantly reduce the overhead required to collect data to perform threat modeling.
- LLMs can generate output in any desired format, including machine-readable output that is tracked in the version management tools, structured format for storage in permanent data stores, or custom formats to integrate with external APIs. This enables **SDLC integration and workflow automation**.
- Fast and dynamic threat modeling means developers can run threat models on smaller components of the code, which could inform related activities such as design review and security requirements generation. By prioritizing security as an integral part of the development process, automated threat modeling supports the **secure-by-design** ethos. We plan to expand of this in a follow-up post.
- Lastly, Automated Threat Modeling can scale and speed up AppSec by enabling **self-serve threat modeling**.

### Acknowledgements

I want to thank [Izar Tarandach](https://www.linkedin.com/in/izartarandach/) for his valuable inputs and feedback on this article. Similarly, I'd like to extend a big thank you to [Rami McCarthy](https://www.linkedin.com/in/ramimac/) for reviewing early drafts of the article and help with improving the article flow. I'd also like to thank [Jeevan Singh](https://www.linkedin.com/in/jeevansecurity/), [Branden Dunbar](https://www.linkedin.com/in/brandendunbar/), [Travis McPeak](https://www.linkedin.com/in/travismcpeak/), and [James Berthoty](https://www.linkedin.com/in/james-berthoty/) of [Latio](https://www.latio.tech/) for several conversations and feedback that led to the formation of some ideas in this blog.

While I am grateful for the valuable feedback and suggestions provided by the reviewers, claims, errors or omissions are solely my own.
