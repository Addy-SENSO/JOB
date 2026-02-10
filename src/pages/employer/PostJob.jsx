export default function PostJob() {
return (
<div className="max-w-3xl mx-auto p-6">
<h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
<input className="input mb-4" placeholder="Job Title" />
<input className="input mb-4" placeholder="Location" />
<input className="input mb-4" placeholder="Salary Range" />
<textarea className="input h-32" placeholder="Job description" />
<button className="btn-primary mt-6">Publish Job Posting</button>
</div>
);
}