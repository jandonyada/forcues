
import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover & share
            <br className="max-md:hidden" />
            <span className="orange_gradient text-center"> AI-powered cues</span>
        </h1>
        <p className="desc text-center">
            ForCues is an open-source AI cues tool for everyone to discover, create, and share creative cues.
        </p>

        <Feed />
    </section>
  )
}

export default Home