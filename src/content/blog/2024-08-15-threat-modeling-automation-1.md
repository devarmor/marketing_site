---
draft: false
title: "Threat Modeling Automation: From a Dream to Reality"
snippet: "Threat modeling is one of the most critical processes in application security. Large Language Models unlock significant potential to revolutionize threat modeling by automatically processing unstructured data, deep understanding the code base, and output generation in several formats."
image: {
    src: "https://devarmor-website.s3.us-west-2.amazonaws.com/Gartner+Hype+Cycle+for+Application+Security+-+ANNOTATED.png",
    alt: "LLMs can automate large aspects of threat modeling"
}
publishDate: "2024-08-11 11:39"
category: "AppSec"
author: "Amir Kavousian"
tags: [appsec, ai, threat-modeling, secure-by-design]
---


This is a two-part series to share our vision for the future of threat modeling. The first part goes over the origins and challenges of threat modeling, and the drivers for innovation in modern threat modeling and AppSec workflows. Part II dives deeper into automatic threat modeling to form the basis for future innovation. 

## Origins
[Threat modeling](https://en.wikipedia.org/wiki/Threat_model) is a fundamental aspect of cybersecurity, with its roots in the risk assessment practices used by militaries and government agencies during World War II. Threat modeling is still a largely manual, ad-hoc and time-consuming process. While [73% of companies](https://www.securitycompass.com/reports/the-2023-state-of-threat-modeling/) said they do threat modeling of their software at least annually, while half said they do it for every release. This workflow was developed after the [waterfall](https://en.wikipedia.org/wiki/Waterfall_model) method, and is less iterative and flexible than the modern Agile and DevSecOps methodologies. 

In the past, some security teams have attempted to train software developers to perform self-serve threat models, but the training process is not repeatable and still requires considerable time and effort investment on the part of the security teams.

Existing tools from [Microsoft](https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool), [IriusRisk](https://www.iriusrisk.com/), [SD Elements](https://www.securitycompass.com/sdelements/) and [SecuriCAD](https://news.ycombinator.com/item?id=37222884) are geared toward security professionals, who spend a significant amount of time to process information from multiple sources, configure the tools, and generate outputs in specific formats. The next generation of threat modeling tools need to [democratize threat modeling](https://www.rsaconference.com/library/blog/threat-modeling-in-2023) to better fit modern engineering workflows and empower smaller teams and average developers to perform threat modeling. 


## Recent Innovation

In recent years, a few open-source tools have attempted to automate some aspects of threat modeling and integrate it better with the SDLC.

### Threat Model As Code

The idea is to store threat modeling inputs and outputs in the codebase, for better visibility, revision management, and developer workflow integration. A few notable tools that have introduced some threat model as code are:

- [Pytm](https://owasp.org/www-project-pytm/) is an [open-source](https://github.com/izar/pytm) OWASP project led by [Izar Tarandach](https://www.linkedin.com/in/izartarandach/). Users define the application architecture in Python using Pytm’s predefined objects. Then, Pytm generates a Data Flow Diagram (DFD) and a Sequence Diagram, and generates a threat model report. Pytm’s most recent addition, its [ChatGPT App](https://chatgpt.com/g/g-soISG24ix-pytmgpt), creates Pytm’s Python code based on a natural language description of the application. 
- [Threat Spec](https://threatspec.org/) is an [open-source](https://github.com/threatspec/threatspec) project that has developers and security engineers write threat modeling annotations as comments inside source code, then dynamically generates reports and data-flow diagrams from the code. 
- [Jupyter Threat](https://open-security-summit.org/sessions/2022/mini-summits/dec/threat-modeling/threat-modelling-as-code-v/) is an [open-source](https://github.com/P3tra-WP/Jupyter-Threat) threat modeling tool that aims to integrate Threat Modeling into the software development pipeline. Jupyter Threat can be configured and run from inside the Jupyter Notebook interface, and generates the threat model output in [machine-readable JSON](https://github.com/P3tra-WP/threat-modeling-as-json), Markdown, or Mermaid formats that can be stored alongside code. It generates attack trees in Mermaid format and PlantUML schema. 
- [Attack Tree](https://attacktree.online/) and the associated open-source threat modeling toolkit [Theagile](https://threagile.io/) allow developers to define the application architecture in YAML and then generate a list of potential attacks and data flow diagrams using the threat modeling toolkit. 

### GUI and Diagramming

The tools in this group offer a graphical user interface to create architecture diagrams and generate threat models based on that. 

- Threat Dragon is an [OWASP](https://owasp.org/www-project-threat-dragon/) [open-source](https://github.com/OWASP/threat-dragon) led by [Mike Goodwin](https://www.linkedin.com/in/dr-mike-goodwin/), [Jon Gadsden](https://www.linkedin.com/in/jon-gadsden/), and [Leo Reading](https://www.linkedin.com/in/leoreading/). It has a GUI where users can create an architecture diagram to define the boundaries of the system and data flow and attach specific threats to each component. Threat Dragon generates threat modeling reports, diagrams, and implements a rule engine to auto-generate threats and their mitigations. 
- [Gram](https://github.com/klarna-incubator/gram) is a threat diagramming tool developed by the Klarna security team and open-sourced. It enables collaborative editing with multiple users, couples with the asset inventory, and offers automatic suggestions based on the existing tech stack. 
- SecureFlag’s [ThreatCanvas](https://blog.secureflag.com/2024/07/25/create-detailed-threat-models-with-threatcanvas/) educates developers to perform threat models, and uses AI to help generate architecture diagrams. 
- Security Compass’ [SD Elements](https://www.securitycompass.com/sdelements/threat-modeling/) works with existing diagrams or a wizard-type survey to gather security requirements and create threat models.
- [Devici](https://devici.com/) allows developers to generate the flow diagrams in its UI, and then generates threat models based on it.

## The Inflection Point

We are at the beginning of another inflection point in application development workflows. The introduction of AI assistants and code generators has exponentially accelerated application code throughput. [Application complexity has increased](https://towardsdev.com/the-importance-of-threat-modeling-in-secure-software-development-a10494b05d22) significantly thanks to the migration to the cloud, proliferation of microservices architecture, and increased sophistication of CI/CD pipelines. Current practices such as manual code reviews, linear design review, and hands-on threat modeling exercises no longer scale in the AI era. We need a new way to enable developers to do threat modeling without a tight dependency on the security teams.  

The shift in AppSec coincides with a few other trends in the security landscape:

### Paved Roads, Guardrails, and Navigation Displays

The security industry is going through a transformation beyond the DevSecOps trend that dominated the conversation in the past 10-15 years. There are several cases for why we need to move beyond DevSecOps; for example, read this [three-piece series](https://www.resourcely.io/post/death-of-devsecops-part-1-the-rise-of-cloud-and-devops) on the current state of DevSecOps and [this post](https://www.linkedin.com/posts/davidmytton_devsecops-activity-7221144484120510464-K28i/?utm_source=share&utm_medium=member_desktop) on the future of application security. The core idea is that we need to move from “detect-block-fix” workflow to “secure-by-design”, providing secure building blocks and empowering the developers to make security decisions via contextual information. The world of “speed bumps” and “security checkpoints” is giving way to “paved roads” and “guardrails” to help, guide, and protect developers. This is where threat modeling comes into play. It allows security teams and developers to communicate the risks and tradeoffs of technical decisions more effectively. It is a “navigation display” that demonstrates the bigger picture of security decisions, and a “heads-up display” that delivers the right information at the right time. 

### Automated Threat Modeling Is On the Horizon

Threat modeling has historically been a manual process. It requires coordination and collaboration across silos (eng and security), relies on unstructured data sources, and needs an understanding of the codebase and security requirements which usually not all reside within a single team. As the development accelerates and code generation becomes commoditized, we need automated threat modeling to keep up with development velocity.

In the past few years we have witnessed innovative products in the threat modeling space (see the Existing Tools section above). The next wave of threat modeling tools have the benefit of using a fundamentally different tech stack. LLMs are addressing the hardest limitations of existing tools: processing unstructured data such as security policies and inferring the application design from the codebase. With AI, the most challenging part of automated threat modeling (i.e., extracting context from unstructured data) is technically solved. LLMs, [Agents](https://www.insightpartners.com/ideas/ai-agents-disrupting-automation/) and Multi-Agent Models are enabling workflows that were deemed impossible only a couple of years ago. 

<figure>
  <img src="https://devarmor-website.s3.us-west-2.amazonaws.com/Gartner+Hype+Cycle+for+Application+Security+-+ANNOTATED.png" alt="Automated Threat Modeling is on the horizon"/>
  <figcaption style="text-align: center;"><em>Gartner identifies automated threat modeling on its way to reach marketability. AI can accelerate automated threat modeling through the hype cycle to make it a viable commercial application earlier than what Gartner predicts (2-5 years).</em>
</figcaption>
</figure>

## Future

Our predictions for the emerging patterns that will change the landscape of threat modeling are:

### Self-Serve Threat Modeling

[Self-serve threat modeling](https://www.youtube.com/watch?v=gJuOXoafP5Y) is a key enabler of the modern AppSec workflow. It goes beyond DevSecOps and Shift Left movements by aligning security awareness and application knowledge in developers’ workflows, during design and development phases. The idea is familiar: the sooner we inform developers of the security implications of their technical choices, the faster and cheaper it is to fix potential issues. Developers know their features the best and, when given the education and training for it, can generate threat models on their own. Self-serve threat modeling [considerably reduces the amount of linear coordination](https://segment.com/blog/redefining-threat-modeling/) (meetings, Slack messages, manual reviews) that is needed to unblock the developers. 

Beyond productivity gains, self-serve threat modeling will also contribute to improved engineering culture (developers “owning” security as part of their engineering excellence principles), awareness (developers referring to threat modeling as one of their regular activities), and faster releases (less sequential iteration between security and developer teams).

### Secure-by-Design: Integrating Threat Modeling into SDLC

Threat modeling has historically been done sequentially within the software development process, via a “push” or “pull” method. In the former mode, developers decide whether a new code change requires security review, and reach out to the security team to threat model. In the “pull” model, the security team monitors the code pipeline and identifies code changes that require threat modeling. In both of these cases, threat modeling is not integrated into the SDLC, but is done as a separate task that needs to be initiated by human actors. This increases the risk that some major technical changes may go through the pipeline without addressing their security implications. 

Automated Threat Modeling makes it easier and faster to threat model. This unlocks a completely novel value chain by allowing software teams to perform security design review and security requirements planning on every engineering change, [integrated into the SDLC and DevSecOps](https://learn.microsoft.com/en-us/security/engineering/threat-modeling-with-dev-ops).

Specifically, during different phases of development, threat modeling unlocks value in a number of ways:

- **Design stage**: Review design documents (PRDs, architecture diagrams, tech specs, user stories) to generate security requirements for developers. Threat modeling process also helps determine subsequent test plans during this stage. For example, does this feature require manual code review or pen-testing? 
- **Development stage**: Validate whether the security requirements are actually implemented. Also, evaluate whether any new threats arise because of how the features are implemented. Lastly, inform test plans and rule-sets for SAST tools to test against plausible and relevant threats. 
- **Test stage**: Inform test plans and rule-sets for DAST tools to test against plausible and relevant threats. 
- **Deploy stage**: Inform monitoring and alerting requirements. Specify penetration testing requirements to validate the app against those security threats.

## AI-Enabled Automated Threat Modeling

Since the introduction of Large Language Models, a few solutions for using LLMs to inform and automate threat modeling has been proposed. [STRIDE GPT](https://open-security-summit.org/sessions/2024/mini-summits/jan/threat-modeling/ai-driven-threat-modelling-with-stride-gpt/) was the first [open-source](https://github.com/mrwadams/stride-gpt) AI-first threat modeling tool that uses LLMs to generate a threat model, based on a user-provided description of the application. Since then, Devici and SecureFlag both have incorporated a similar functionality to use AI to process application descriptions and generate threat models based on that. 

The next step in using LLMs to accelerate threat modeling adoption is to incorporate code comprehension capabilities to inform the threat model directly based on the codebase. Application description and diagrams have historically been the main input to threat models; but, they require time and effort to maintain and often have inaccuracies. By directly using the codebase, future automated threat modeling can improve the speed, accuracy, and cadence of threat modeling activities. AI can also help with generating data flow diagrams and threat scenarios. 

## Summary

Threat modeling is one of the most critical processes in application security. The recent transformation in software development has put threat modeling at the center of a new automation push, as security teams try to do more with smaller teams. 

Large Language Models unlock significant potential to revolutionize threat modeling by automatically processing unstructured data, deep understanding the code base, and output generation in several formats. 

In this article, we reviewed the origins and state of threat modeling, and presented a roadmap for future innovations. The most significant elements of this transformation are:

- Automated Threat Modeling can scale and speed up AppSec by enabling self-serve threat modeling.
- Machine-readable output that is tracked in the version management tool alongside the source code enables downstream integrations and workflow automation.
- LLMs ability to comprehend business logic from code allows AI-enabled threat modeling tools to work directly with the codebase, instead of detailed architecture diagrams or descriptions of the applications. This will significantly reduce the overhead required to perform threat modeling.
- Fast and dynamic threat modeling means developers can run threat models on smaller components of the code, opening the door to automate day-to-day activities such as design review and security requirements generation. This in turn supports the secure-by-design ethos.


We plan to publish a follow-up article to expand on our definition on automated threat modeling.

### Acknowledgements

I want to thank [Rami McCarthy](https://www.linkedin.com/in/ramimac/) for his valuable feedback on early drafts of this article. I'd also like to thank [Jeevan Singh](https://www.linkedin.com/in/jeevansecurity/), [Izar Tarandach](https://www.linkedin.com/in/izartarandach/), [Frank Wang](https://www.linkedin.com/in/frankw1/), [Branden Dunbar](https://www.linkedin.com/in/brandendunbar/), and [Travis McPeak](https://www.linkedin.com/in/travismcpeak/) for conversations and feedback that led to formation of some ideas in this blog. 
