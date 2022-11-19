import getPosts from "helpers/getPosts";
import { useEffect, useState } from "react";
import PostsStack from "components/PostsStack";
import ContactDetails from "components/ContactDetails";
import Skills from "components/Skills";
import CurrentlyLearning from "../components/CurrentlyLearning";

export default function Home({ projects: propsProjects, work: propsWork }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => setProjects(propsProjects), [propsProjects]);

  const [work, setWork] = useState([]);
  useEffect(() => setWork(propsWork), [propsWork]);

  return (
    <div className="flex gap-x-10 pt-8">
      <div className="w-1/3">
        <ContactDetails />
        <Skills />
        <CurrentlyLearning />
      </div>
      <div className="w-2/3">
        <PostsStack title="Projects" posts={projects} />
        <PostsStack title="Relevant Work Experience" posts={work} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const projects = await getPosts("projects");
  const work = await getPosts("work");

  return {
    props: {
      projects,
      work,
    },
  };
};
