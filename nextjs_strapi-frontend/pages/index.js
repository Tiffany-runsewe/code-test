import Link from 'next/link'
import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { API_URL } from '@/config/index'
import { useEffect, useState } from "react";

export default function Home() {
  
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`)
      .then((res) => res.json())
      .then(setEvents);
  }, []);

  return (
    <Layout>
      <h1>Upcoming events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) =>(
        <EventItem key={evt.id} evt={evt}/>
      ))}

      {events.length > 0 && (
        <Link href='/events'>
          <a className="btn-secondary">
            View All Events
          </a>
        </Link>
      )}
    </Layout>
  )
}

export async function getStaticProps(){

  
  const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`);
  const events = await res.json()

  console.log(events);

  return{
    props: {events},
    revalidate: 1,
  }
}