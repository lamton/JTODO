import '../assets/styles/footer.styl'

export default{
    data(){
        return {
            author:'lamton'
        }
    },
    render(){
        return (
            <div id="footer">
                <span>Written by lamton{this.author}</span>
            </div>
        )
    }
}