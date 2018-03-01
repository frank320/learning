# linux服务器硬件配置信息查看

### 1. linux版本及内核
  - 查看发行版本
  `cat /etc/redhat-release` 
  
  - 查看内核版本
  `cat /proc/version` 
  
  - 机器型号
  `/usr/sbin/dmidecode`
  
### 2. cpu
  - 型号
  `cat /proc/cpuinfo | grep 'model name'| uniq` 
   
  - 物理cpu个数
  `cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l`
    
  - 每个物理CPU中core的个数(即核数)
  `cat /proc/cpuinfo| grep "cpu cores"| uniq`
     
  - 逻辑核心数
  `cat /proc/cpuinfo| grep "process"| wc -l`  
  
### 3. 内存
  - 查看内存总数
  `cat /proc/meminfo | grep MemTotal`  
  