import FadeIn from 'react-fade-in'
import Link from 'next/link'
import History from 'react-simple-timeline'
import Layout from '../components/layout'
import Center from '../components/center'
import Fade from '../components/fade'
import colors from '../components/colors'
import fonts from '../components/fonts'

const stories = [
  {
    title: 'Sourcefabric',
    subtitle: 'Senior Web Developer',
    date: 'since 2018',
    link: 'https://www.sourcefabric.org/',
    image: 'https://avatars3.githubusercontent.com/u/5527298?s=200&v=4'
  },
  {
    title: 'LadJS',
    subtitle: 'Core team member',
    date: 'since 2017',
    link: 'https://github.com/ladjs/lad',
    image: 'https://avatars3.githubusercontent.com/u/30959108?s=200&v=4'
  },
  {
    title: 'Keepcoding',
    subtitle: 'Master in Full Stack Javascript',
    date: '2017-2018',
    link: 'https://keepcoding.io/es/keepcoding-web-development-master-bootcamp/',
    image: 'https://avatars0.githubusercontent.com/u/31599428?s=200&v=4'
  },
  {
    title: 'StangDS',
    subtitle: 'Web Developer',
    date: '2016-2017',
    link: 'http://stangds.com/',
    image: 'https://media.licdn.com/mpr/mpr/shrink_200_200/AAEAAQAAAAAAAANQAAAAJDA5ODFhNGZmLWZhNDQtNGIxOS04ODlkLWRmZThiOTAzOTRjOQ.png'
  },
  {
    title: 'USC',
    subtitle: 'Degree in Computer Science',
    date: '2011-2015',
    link: 'http://www.usc.es/etse/',
    image: 'http://quehacerensantiago.com/sites/default/files/styles/medium/public/usc_44.gif?itok=QfM9l-t5'
  }
]

export default () => (
  <Layout>
    <div>
      <Center height={70}>
        <FadeIn>
          <div className='image-wrapper'>
            <img src='/static/images/me.png' />
          </div>
          <div>
            <div className='title'>Pablo Varela</div>
          </div>
          <ul className='link-list'>
            <li>
              <a target='_blank' href='https://twitter.com/pablopunk'>
                Twitter
              </a>
            </li>
            <li>
              <a target='_blank' href='https://youtube.com/varelapol13'>
                YouTube
              </a>
            </li>
            <li>
              <Link href='./photos' prefetch>
                <a>Photos</a>
              </Link>
            </li>
            <li>
              <a
                target='_blank'
                href='https://open.spotify.com/user/pablovarela12'>
                Music
              </a>
            </li>
            <li>
              <a target='_blank' href='https://github.com/pablopunk'>
                Code
              </a>
            </li>
            <li>
              <Link href='./projects' prefetch>
                <a>Projects</a>
              </Link>
            </li>
          </ul>
        </FadeIn>
      </Center>
      <Center cropTop height={0} className='history'>
        <Fade delay={1}>
          <h1>My Story</h1>
          <History className='history' fade stories={stories} />
        </Fade>
      </Center>
    </div>
    <style jsx>{`
      .image-wrapper {
        width: 130px;
        height: 130px;
        margin: 0 auto;
      }
      .image-wrapper img {
        width: 100%;
        height: 100%;
      }
      .title {
        color: ${colors.main};
        font-family: ${fonts.title};
        font-size: 3em;
        text-align: center;
      }
      .title::after {
        content: '1993';
        color: #777;
        font-size: 13px;
        font-family: ${fonts.mono};
        font-weight: lighter;
        position: absolute;
        margin-top: 1em;
        margin-left: 0.3em;
        opacity: 0;
        animation: fadeIn 0.4s ease-in forwards;
        animation-delay: 2s;
      }
      .link-list {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        transition: font-size 0.2s ease-in;
        text-align: center;
      }
      .link-list li {
        padding: 0.5em 1.5em;
        cursor: pointer;
      }
      h1 {
        font-family: ${fonts.title};
        font-size: 1.6em;
        color: ${colors.main};
        text-align: center;
        font-weight: lighter;
      }
      @keyframes fadeIn {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
      @media (max-width: 768px) {
        .link-list {
          flex-direction: column;
          justify-content: flex-start;
          font-size: 1.3em;
        }
        .history {
          font-size: 20px;
        }
      }
      @media screen and (orientation: landscape) {
        .link-list {
          flex-direction: row;
          font-size: 1em;
          justify-content: center;
          flex-wrap: wrap;
        }
      }
    `}</style>
  </Layout>
)
