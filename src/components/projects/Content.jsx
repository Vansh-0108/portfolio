import React from 'react'
import Card2 from '../card/Card2'

function Content({domain}) {
    if(domain === 'WebD'){
        return (<div className="grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-6 m-4">
        <Card2
            name = "My WebD Project 1"
            imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "React Javascript"
        />
        <Card2
            name = "My WebD Project 2"
            imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "React Javascript"
        />
        <Card2
            name = "My WebD Project 3"
            imgsrc = 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/dark_mode_%281%29.jpg?size=1200:675'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "DontReact Typescript"
        />
        </div>)
    }
    else if (domain === 'GD'){
        return (<div className="grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-6 m-4">
        <Card2
            name = "My GD Project 1"
            imgsrc = 'https://images.pexels.com/photos/1601773/pexels-photo-1601773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "React Javascript"
        />
        <Card2
            name = "My GD Project 2"
            imgsrc = 'https://images.pexels.com/photos/1601773/pexels-photo-1601773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "React Javascript"
        />
        <Card2
            name = "My GD Project 3"
            imgsrc = 'https://images.pexels.com/photos/1601773/pexels-photo-1601773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
            skills = "DontReact Typescript"
        />
    </div>)
    }
    else if (domain === 'Photo'){
        return <div className="grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-6 m-4">
            <Card2
                name = "My Photo Project 1"
                imgsrc = 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                skills = "React Javascript"
            />
            <Card2
                name = "My Photo Project 2"
                imgsrc = 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                skills = "React Javascript"
            />
            <Card2
                name = "My Photo Project 3"
                imgsrc = 'https://images.pexels.com/photos/212372/pexels-photo-212372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                desc = "Lorem Ipsum Dolor, Sit Amet Consectetur Adipisicing Elit. Minus At Repellat Perferendis Dolorem, Temporibus Placeat Exercitationem, Ratione Odit Eligendi Ipsa Consequuntur Tempore Accusantium Quasi Modi, Debitis Delectus Architecto Alias Ullam."
                skills = "DontReact Typescript"
            />
        </div>
    }
}

export default Content;