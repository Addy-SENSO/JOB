const jobs = [
{ id: 1, title: "Senior Frontend Developer", company: "TechCorp Inc.", location: "San Francisco, CA" },
{ id: 2, title: "Product Manager", company: "Innovation Labs", location: "New York, NY" },
];


export default function BrowseJobs() {
return (
<div className="grid grid-cols-[380px_1fr] h-[calc(100vh-64px)]">
<div className="border-r p-4 overflow-y-auto">
<input className="input mb-4" placeholder="Search jobs..." />
{jobs.map(job => (
<div key={job.id} className="p-4 rounded-lg hover:bg-gray-50 cursor-pointer">
<h3 className="font-medium">{job.title}</h3>
<p className="text-sm text-gray-500">{job.company}</p>
<p className="text-xs text-gray-400">{job.location}</p>
</div>
))}
</div>
<div className="flex items-center justify-center text-gray-400">
Select a job to view details
</div>
</div>
);
}