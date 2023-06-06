class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', );
        // insertAdjacentElement : HTMLElement를 삽입하기 위해 자바스크립트 브라우저에서 제공하는 기본 메서드
    }
}