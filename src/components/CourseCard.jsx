function CourseCard({course}){
    return(
        <div>
           <img src={course.image} className="h-48 w-full object-cover rounded-xl"/>
           {/* card content */}
           <div className="p-5">
                <span className="inline-block bg-blue-100 text-blue px-3 py-1 mb-3 ">
                    {course.category}
                </span>
                <h2 className="text-xl font-bold text-gray-700 mb-2">{course.title}</h2>
                <p>{course.description}</p>
           </div>
        </div>
    );
}

export default CourseCard;
