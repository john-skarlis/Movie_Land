function About() {

    const teamMembers = [
        { name: 'Ιωάννης Σκαρλής', job: 'Frontend Developer', avatar: 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg' },
        { name: 'Νίκη Ευαγγελίδου', job: 'Backend Developer', avatar: 'https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg' },
        { name: 'Βασιλική Δέλιου', job: 'UI/UX Designer', avatar: 'https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg' },
        { name: 'Ανέστης Φωτακίδης', job: 'Project Manager', avatar: 'https://www.svgrepo.com/show/382105/male-avatar-boy-face-man-user-5.svg' },
    ];

    return (
        <div className="container mx-auto my-8 p-8 bg-gray-100">
            <h1 className="text-3xl font-semibold mb-4 text-center">Meet Our Team</h1>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={member.avatar}
                            alt={`${member.name}'s avatar`}
                            className="rounded-full mx-auto h-24 w-24 mb-2 border-4 border-white"
                        />
                        <p className="text-lg font-semibold">{member.name}</p>
                        <p className="text-gray-500">{member.job}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default About;