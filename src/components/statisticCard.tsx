function statisticCard({ title, value }: { title: string; value: number }) {
  return (
    <div>
      <main className="card bg-base-100 w-96 shadow-lg">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <p>{value}</p>
        </div>
      </main>
    </div>
  );
}

export default statisticCard;
