export default function DepartmentsSection() {
  const depts = [
    { title: "Rishi Darshan", img: "/images/dept1.jpg" },
    { title: "Bal Sanskar Kendra", img: "/images/dept2.jpg" },
    { title: "Mahila Utthan Mandal", img: "/images/dept3.jpg" },
    { title: "Rishi Prasad", img: "/images/dept4.jpg" },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-3">🏛 Departments</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {depts.map((d, i) => (
          <div key={i} className="bg-white shadow rounded-lg p-3 text-center">
            <img src={d.img} alt={d.title} className="rounded mb-2 w-full h-24 object-cover" />
            <h3 className="font-semibold">{d.title}</h3>
            <p className="text-sm text-teal-500">Watch Videos</p>
          </div>
        ))}
      </div>
    </section>
  );
}
