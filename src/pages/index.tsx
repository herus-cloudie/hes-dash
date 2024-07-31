

export default function HomePage(){
  return <></>;
}

export async function getServerSideProps() {
    return {
      redirect: {
        destination: '/dashboards/analytics',
        permanent: false,
      },
    }
}