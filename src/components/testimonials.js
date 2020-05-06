import React, { useState } from 'react'
import { css, cx } from 'emotion'
import benedusi from '../images/alberto-benedusi.jpg'
import scavone from '../images/giuseppe-scavone.jpg'
import salvatore from '../images/salvatore-di-giovanni.jpg'
import monica from '../images/monica-gili.jpg'
import saputo from '../images/michele-saputo.jpg'
import aquilanti from '../images/lucia-aquilanti.jpg'

export default function Testimonial ({ testimonials, overtitle, title1, title2 }) {
  console.log(testimonials.forbesArticle, 'testtimonial page')
  const quotes = [
    {
      client: testimonials.client0,
      quote: testimonials.quote0,
      company: 'La Scarpiera Slim',
      img: scavone
    },
    {
      client: testimonials.client1,
      quote: testimonials.quote1,
      company: 'Italia Bulldog',
      img: saputo
    },
    {
      client: testimonials.client2,
      quote: testimonials.quote2,
      company: 'Difar',
      img: salvatore
    },
    {
      client: testimonials.client3,
      quote: testimonials.quote3,
      company: 'Officina del Mugello',
      img: benedusi
    },
    {
      client: testimonials.client4,
      quote: testimonials.quote4,
      company: 'La Curandera',
      img: monica
    },
    {
      client: testimonials.client5,
      quote: testimonials.quote5,
      company: 'Università Politecnica delle Marche',
      img: aquilanti
    }
  ]

  const [current, setCurrent] = useState(quotes[0])
  const [active, setActive] = useState(0)

  const handleSetClick = e => {
    setCurrent(quotes[e.target.getAttribute('data-quote')])
    setActive(e.target.getAttribute('data-quote'))
  }

  return (
    <section className={css`
        margin-bottom: 140px;
    `}
    >
      <div className={css`
        text-align: center;
        margin-top: 120px
      
      `}
      >
        <span className='overtitle-dark'>{overtitle}</span>
        <h2 className='title-section'>
          {title1}
          <br /> {title2}
        </h2>
      </div>
      <div
        className={css`
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 40px auto;
          max-width: 800px;
          padding: 0 10px;
          p {
            text-align: center;
            margin-bottom: 20px;
            font-style: italic;
            line-height: 28px;
          }
          p:nth-child(3) {
            font-style: normal;
            color: #272727;
            font-weight: 600;
          }
          span {
            position: relative;
            bottom: 20px;
            margin-bottom: 30px;
            font-size: 12px;
            color: #777;
          }
          img {
            width: 100px;
            border-radius: 50%;
            box-shadow: 0px 0px 10px 0px rgba(12, 5, 5, 0.6);
          }
        `}
      >
        <img src={current.img} />
        <p>{current.quote}</p>
        <p>{current.client}</p>
        <span>{current.company}</span>
        <div
          className={css`
          display: flex;
          span {
            height: 20px;
            width: 20px;
            margin: 0 3px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
          }
          span::before {
            content: "";
            height: 10px;
            width: 10px;
            background-color: #d2d2d2;
            border-radius: 50%;
            transition: background-color 0.3s ease;
          }
          span:hover::before {
            background-color: #000;
          }
          span[data-quote="${active}"]::before{
              background-color: #000
          }
        `}
        >
          {Object.keys(quotes).map(index => (
            <span
              onClick={e => handleSetClick(e)}
              data-quote={index}
              key={index}
            />
          ))}
        </div>
        <p>{testimonials.forbesArticle}: <br /><a id='forbes' href='https://www.forbes.fr/mediasfrance/vanilla-marketing-les-createurs-numeriques/?cn-reloaded=1'>> Forbes</a></p>
      </div>
      <style jsx='true'>{`
        #forbes{
          text-decoration: none;
          color: #222;
          font-weight: 500
        }
        #forbes:hover{
          color: #000
        }
        `}
      </style>
    </section>
  )
}
