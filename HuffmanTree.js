function HNode(name,w){
	this.name=name;
	this.weight=w;
	this.lchild=this.rchild=this.parent=-1;
	this.code="";
}
function create(str){
	str=str.toLowerCase();
	str=str.replace(/\s+/g, "");
	let c=[];
	//使用charcode统计，其index为code
	for(let i=0;i<str.length;i++){
		let index=str.charCodeAt(i)-("a".charCodeAt(0));
		if(c[index]){
		    c[index]++;
		}else{
			c[index]=1;
		}
	}
	//计算字母种类数量
	let ctn=0;
	for(let i=0;i<c.length;i++){
		if(c[i]){
			ctn++;
		}
	}
	let leafNum=ctn;
	let data=[];
	//创建节点
	for(let i=0;i<2*leafNum-1;i++){
		data[i]=new HNode(-1,-1);
	}

	ctn=0;
	//叶子节点赋值
	for(let i=0;i<c.length;i++){
		if(c[i]){
			let code=i+"a".charCodeAt(0);
			data[ctn].name=String.fromCharCode(code);
			data[ctn++].weight=c[i];			
		}
	}

	//处理n个叶子节点，建立哈夫曼树
	let m1,m2,x1,x2;
	for(let i=0;i<leafNum-1;i++){
		m1=m2=Infinity;
		x1=x2=0;
		for(let j=0;j<leafNum+i;++j){
			if((data[j].weight<m1)&&(data[j].parent==-1)){
				m2=m1;
				x2=x1;
				m1=data[j].weight;
				x1=j;
			}else if((data[j].weight<m2)&&(data[j].parent==-1)){
				m2=data[j].weight;
				x2=j;
			}
		}

		//用两个权值最小的构造一个新的中间结点
		data[leafNum+i].weight=data[x1].weight+data[x2].weight;
		data[leafNum+i].lchild=x1;
		data[leafNum+i].rchild=x2;
		data[x1].parent=data[x2].parent=leafNum+i;          

	}



}
create('aFJSDLF LNE F')
function HuffmanTree(){

}