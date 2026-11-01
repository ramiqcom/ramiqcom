import Image from 'next/image';
import profileImage from '@/image/IMG_20241120_113504.jpg';
import {
  contacts,
  links,
  navigation,
  papers,
  profile,
  projects,
  videos,
} from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <header className='site-header'>
        <nav className='container nav'>
          <a href='#top' className='brand'>
            {profile.name}
          </a>
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id='top'>
        <section className='container hero'>
          <div className='hero-text'>
            <p className='eyebrow'>{profile.role}</p>
            <h1>Hi, I&apos;m {profile.name}.</h1>
            <p className='lead'>{profile.summary}</p>
            <p className='muted'>
              {profile.location} ·{' '}
              <a href={profile.company.url} target='_blank' rel='noreferrer'>
                {profile.company.name}
              </a>
            </p>
            <div className='actions'>
              <a className='button primary' href='#projects'>
                View projects
              </a>
              <a className='button' href='#research'>
                Read my research
              </a>
            </div>
          </div>
          <Image
            className='portrait'
            src={profileImage}
            alt={`Portrait of ${profile.name}`}
            width={320}
            height={320}
            priority
          />
        </section>

        <section id='about' className='container section'>
          <h2>About</h2>
          <div className='about'>
            <div>
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ul className='chips'>
              {profile.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section id='projects' className='container section'>
          <h2>Projects</h2>
          <div className='grid'>
            {projects.map((project) => (
              <article key={project.repo} className='card'>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className='chips small'>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className='card-links'>
                  {project.demo && (
                    <a href={project.demo} target='_blank' rel='noreferrer'>
                      Live demo
                    </a>
                  )}
                  <a href={project.repo} target='_blank' rel='noreferrer'>
                    Source code
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className='more'>
            More on{' '}
            <a href={links.github} target='_blank' rel='noreferrer'>
              GitHub
            </a>
            .
          </p>
        </section>

        <section id='research' className='container section'>
          <h2>Research</h2>
          <ol className='papers'>
            {papers.map((paper) => (
              <li key={paper.doi}>
                <a href={`https://doi.org/${paper.doi}`} target='_blank' rel='noreferrer'>
                  {paper.title}
                </a>
                <span className='muted'>
                  {paper.venue}, {paper.year}
                </span>
              </li>
            ))}
          </ol>
          <p className='more'>
            Full list on{' '}
            <a
              href='https://scholar.google.com/citations?user=TAZp-ggAAAAJ&hl=en'
              target='_blank'
              rel='noreferrer'
            >
              Google Scholar
            </a>{' '}
            and{' '}
            <a href='https://orcid.org/0009-0006-9501-9071' target='_blank' rel='noreferrer'>
              ORCID
            </a>
            .
          </p>
        </section>

        <section id='videos' className='container section'>
          <h2>Videos</h2>
          <p className='muted'>
            Tutorials on remote sensing, Earth Engine, Python, and geospatial web apps.
          </p>
          <div className='grid'>
            {videos.map((video) => (
              <a
                key={video.id}
                className='card video'
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target='_blank'
                rel='noreferrer'
              >
                <Image
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt=''
                  width={480}
                  height={360}
                  unoptimized
                />
                <h3>{video.title}</h3>
                <span className='muted'>{video.year}</span>
              </a>
            ))}
          </div>
          <p className='more'>
            Watch more on{' '}
            <a href={links.youtube} target='_blank' rel='noreferrer'>
              YouTube
            </a>
            .
          </p>
        </section>
      </main>

      <footer id='contact' className='site-footer'>
        <div className='container'>
          <h2>Get in touch</h2>
          <ul className='contacts'>
            {contacts.map((contact) => (
              <li key={contact.label}>
                <a href={contact.href} target='_blank' rel='noreferrer'>
                  {contact.label}
                </a>
              </li>
            ))}
          </ul>
          <p className='muted'>
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </footer>
    </>
  );
}
