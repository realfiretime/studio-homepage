import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        FireStudio
      </h1>
      <p className="mb-4">
        {`Hey, We are FireStudios *im the only person in the studio* We make games *SOON* and 
          other stuff. first game is comming out soon. wait for a blog about it`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
