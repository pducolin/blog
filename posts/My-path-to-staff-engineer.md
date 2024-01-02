---
title: "My path to staff engineer"
author: "poladuco"
date: "2024-01-02"
heroImage: 
  path: 
      big: /assets/images/targets.webp
      small: /assets/images/targets_small.webp
  alt: Targets Pictures by Afif Ramdhasuma from Unsplash
  
---

I was recently promoted to Staff Engineer at my current company, Datadog. It was a path started 3 years ago, when I joined as a Senior Software Engineer. Here is how it went.

## Back to the start

I joined Datadog in August 2020 as a Senior Software Engineer coming from a Staff Engineer role at a smaller company, Dashlane. It sounded like an opportunity to learn about distributed system, backend, networking and security, relevant expertise in the observability domain. 3 months in, I started working full stack in a team of 3 engineers to kick off a new product from scratch, [NDM](https://www.datadoghq.com/product/network-monitoring/network-device-monitoring/).

From day one I was clear in discussing with my managers that I wanted to grow in the IC path and get to the staff engineer role. My direct manager joined the company the same day I did: from day one we started the journey to get there.

## Step one: investigation

Learning how to get there took one year. The title was fresh new and its expectations blurry. Senior engineers at Datadog are technical leaders, so what was the difference with a staff ? What did it mean to be a staff engineer out of distributed systems projects ? Nobody around me had a clear answer. There were mentions of cross-team impact, leadership, communication skills.

Thanks to the experience as a staff engineer at my previous company I knew I could lead a project and communicate on it. With my manager's help I understood I needed a project to show that I could have cross-team impact.

Back then I was working full stack on a fresh new product from scratch. I led the frontend development and worked on a backend service and a couple of features on the Agent - the software that runs on customers hosts and collects metrics and events. I could work on the backend. It was interesting to see how the developer experience changed from one stack to the other.

While working on the frontend I could meet with talented and lovely colleagues, with a strong learning and sharing culture. One of them eventually became my mentor: from them I learned that my company valued projects that improved efficiency.

After one year investigating and meeting with people I had my first staff mentor. They were recently promoted to staff: their director trusted them and delegated them a project that was ill-defined, cross-team and with high business impact potential. My mentor led the project successfully.

Some of the initial fog was gone: what was missing was a project and a sponsor.

## Step two: a project

My first attempt of a project was introducing Property Based Testing to the frontend stack. I learned about PBT by chance at a JS meetup in Paris, where Nicolas Dubien talked about [fast-check](https://github.com/dubzzz/fast-check). The frontend code base was not using it yet: I used an hackathon to do a PoC and write a test for the search bar, to assure it was handling well race conditions. I wrote an [RFC](https://en.wikipedia.org/wiki/Request_for_Comments), a document explaining what was PBT and how it could come in help to test code that should respect a property, and how effective it was in catching race conditions.

My RFC was rejected: the testing stack recently moved to Jest and React Testing Library, there was not a clear use case to test and code was already correctly handling race conditions in the search bar. Still it was a way to get in touch with more folks.

As I was familiarizing with the frontend stack and people, I felt more and more comfortable, giving a talk to our internal frontend summit and later externally at Devoxx France with Florent Le Gall, another senior software engineer with a passion for testing.

My second project proposal was to build a testing framework to allow testing the Agent as a black box. I wrote an RFC to improve the manual QA process for my project, with a solution that was open to support any of the Agent features and deployments. It was inspired by a framework used to test agent integrations, written in Python and defined in the integrations repository.

The Agent QA is a manual process, done for one or more weeks while the code base is frozen, every 6 weeks. I suggested building something that could let developers define their infrastructure setup somehow, then allow spawning an ephemeral environment, configuring the Agent and assert that the Agent was emitting expected outputs, such as metrics, logs and events.

![Photo of a black-box test environment for Datadog Agent]( https://raw.githubusercontent.com/pducolin/blog/main/public/assets/images/black_box.webp)

## Step three: the execution

The Agent is the [open source software](https://github.com/DataDog/datadog-agent/) that runs on hosts and collects events and metrics. Its core is mainly in Golang. Along the years we tried several frameworks to solve the e2e testing issue, but none of them was widely adopted: [Kitchen](https://kitchen.ci/) required learning Ruby. [Argo](https://argo-cd.readthedocs.io/en/stable/) was handy to define a test, but not straightforward to debug failing ones.

I wanted something that required the thinnest boilerplate to define an Agent E2E test and use it to QA the agent, improving quality and reducing manual setup time. I talked about my RFC at an internal Agent summit, getting positive feedback and raising interest. This also helped me finding out there was a complementary RFC under review, that suggested using [Pulumi](https://www.pulumi.com/) to define ephemeral environments. Pulumi is an open source SDK that allows defining infrastructure as code. It supported Golang.

We joined forces and I started leading a squad, spending most of our time discussing and designing our framework with a third senior engineer with Golang and architecture expertise. Three senior engineers working on a testing framework meant passionate discussions, with long debates and negotiations - should we use Python or Golang ? should we privilege flexibility or reduce options helping discoverability ?. We collected use cases by 8 different teams and prioritized most common ones.

After 6 months we had an alpha version: just in time for another internal teams summit.

## Step four: ensuring adoption

I used each internal summit as an opportunity to communicate where we were and to get feedback to adapt our trajectory. We used our first barely usable version to run a workshop and test it with interested developers. This was followed by a feedback form with multi-choice questions, prefilled with issues we collected during the workshop - so many !

I started a weekly update email: this engaged folks in the process, gave the squad a pace and eventually gained us help from other Agent engineers.

All in all, we delivered a projected that was rapidly adopted and liked by other teams.

## Step five: the promotion

Once the project was delivered, maintained and adopted, I felt confident I proved my leadership skills. In the meantime the manager who was in charge of sponsoring my promotion moved to another team, leaving my promotion document behind.

That was a tough moment: my energy level was low, the hardest part feeling my career was out of my control. That was where my new step manager and a mentor suggested to take back control and write the document myself. Honestly, it felt discouraging not to have a sponsor. Eventually, my manager took on the sponsor role and accepted to have me work on the document with them - they already drafted most of it months earlier. That was it: my director pushed to try and send the document to the promotion committee, and one month later I was promoted.

## Conclusions

There are many things I learned during this 3 years.

Number one: talk to people and build a trust network. The greatest misconception I had over the staff role is that you could achieve it by working on a complex technical project individually. Turns out there it depends, find out what matters for your company. In my case IC stands for Influential Contributor rather than Individual Contributor.

Number two: communicate honestly with your manager, help them help yourself. Deliver what you are asked for and discuss what you want to work on next, not hesitating to move out of your comfort zone.

Number three: find a project that has a business impact. Then show it and think about how to measure it, from the start.

Number four: reduce boilerplate to increase adoption. We implemented a new framework, we chose to use the most used language, Golang, rather than the one that everyone knew, Python. Write documentation, guidelines and examples. Communication was a key factor in delivering and allowing the project's adoption.

Number five: iterate and prioritize decisions that will help most of the use cases. If we had waited for the perfect and complete solution, we would still be here discussing. It's never too soon to test a version and to communicate about it. Prefer beta tester you trust and that trust you, it helps with giving and receiving candid feedback.
