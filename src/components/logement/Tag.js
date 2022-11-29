import "../../style/components/logement/tag.css"

/**
 * For each tag we make a tag
 * @param {*} props 
 * @returns the tag
 */

function Tag(props) {
    const tagTab = props.tags;

    const tags = tagTab.map(tag => {
        return <div key={tag} className="Tag">
            <p>{tag}</p>
        </div>
    })

    return (
        <div className="Tag-layout">
            {tags}
        </div>
    );
}

export default Tag;
