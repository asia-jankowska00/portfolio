import React from "react"
import Layout from "../components/Layout"
import ScrollAnimation from "react-animate-on-scroll"

import "../styles/main.scss"

const Values = () => {
  return (
    <Layout title="Values" textToType="< Values />">
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <section className="padding-x-large padding-y-small flex values show-on-scroll">
            <div className="values-icons">
              <h1>Ambition</h1>
              <h4 className="subtitle">"Always one step ahead"</h4>
            </div>
            <div className="values-text">
              <p>
                With each new project I take up new technologies, tools and
                methods. I like to be ahead of the game and keep up to date with
                trends and tech.
              </p>
              <p>
                My expertise allows me to to eagerly anticipate challenges
                instead of fearing them.
              </p>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <section className="padding-x-large padding-y-small flex values show-on-scroll">
            <div className="values-text">
              <p>
                Half-measures and doing the minimum won't do for me. If I take
                up a task, I will do it well.
              </p>
              <p>
                I consider all aspects of a project and make sure that none of
                them will fall short as a result of my decisions.
              </p>
            </div>
            <div className="values-icons">
              <h1>Excellence</h1>
              <h4 className="subtitle">"Never the bare minimum"</h4>
            </div>
          </section>
        </ScrollAnimation>

        <section className="padding-x-large padding-y-small flex values show-on-scroll">
          <div className="values-icons">
            <h1>Creativity</h1>
            <h4 className="subtitle">"Creativity at the core"</h4>
          </div>
          <div className="values-text">
            <p>
              The act of creation is my greatest passion, and I make sure that
              it shows in my efforts.
            </p>
            <p>
              I love shaping things from the ground up, and I’m always bursting
              with ideas on how to make the best from what I’m given.
            </p>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex values show-on-scroll">
          <div className="values-text">
            <p>
              A well-integrated team is the first step to achieving success.
            </p>
            <p>
              Honesty and efficient communication are always a priority for me,
              and I am ready to set aside my personal preferences if it means
              achieving results faster.
            </p>
          </div>
          <div className="values-icons">
            <h1>Teamwork</h1>
            <h4 className="subtitle">"Great things are achieved together"</h4>
          </div>
        </section>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <section className="padding-x-large padding-y-small flex values show-on-scroll">
          <div className="values-icons">
            <h1>Honesty</h1>
            <h4 className="subtitle">“Because you can’t grow without it”</h4>
          </div>
          <div className="values-text">
            <p>
              I appreciate honest feedback, and I’m ready to give it when the
              situation calls for it. I like getting straight to the point and
              not wasting time on unnecessary courtesy.
            </p>
            <p>
              I am always honest and open with my perception of the situation,
              and I will make it clear when I don’t understand something or
              think I’m not capable of doing it.
            </p>
          </div>
        </section>
      </ScrollAnimation>
    </Layout>
  )
}

export default Values
