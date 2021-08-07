const infos = () => {
  const sampleData= [
    {
        id: 1,
      logo: "Ministry of Justice",
      type: "Abubakar Malami",
      comment: "Kebbi",
    },
    {
        id: 2,
        logo: "Ministry of Justice",
        type: "Abubakar Malami",
        comment: "Kebbi",
    },
    {
      id:3,
      logo: "Ministry of Justice",
      type: "Abubakar Malami",
      comment: "Kebbi",
    },
    {
      id:4,
      logo: "Ministry of Justice",
      type: "Abubakar Malami",
      comment: "Kebbi",
    }
  ]

  return (
    <div className="info">
      {sampleData.map((info) => (
        <div className="user">{info}</div>
      ))}
    </div>
  );
};

