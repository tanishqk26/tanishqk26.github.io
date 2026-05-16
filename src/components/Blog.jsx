const BLOG_POSTS = [
  {
    title: 'Why Semantic Search is a Game Changer',
    description:
      'Semantic search represents a monumental shift in how we retrieve information. By leveraging vector embeddings and LLM reasoning, we can finally search by intent rather than relying on brittle keyword matching. This article explores the mechanics of semantic search and why it is transforming enterprise data access.',
    link: 'https://medium.com/@tanishqkokane/why-semantic-search-is-a-game-changer-8c478da0c50e',
    linkText: 'Read on Medium',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="Blog fade-in">
      <div className="blog-content">
        <h2>Blog</h2>
        <ul>
          {BLOG_POSTS.map(({ title, description, link, linkText }) => (
            <li key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
