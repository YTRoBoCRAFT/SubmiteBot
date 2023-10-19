const Discord = require("discord.js")
const {
  Client,
  EmbedBuilder,
  ActionRowBuilder,
  StringSelectMenuBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ButtonBuilder,
  ButtonStyle,
  PermissionsBitField,
  ApplicationCommandOptionType
} = require("discord.js")
const client = new Client({ intents: ["Guilds", "MessageContent", "GuildMessages", "GuildMembers"] });
const express = require("express")
const app = express();
const ms = require("ms");

app.listen(() => console.log("I'm Ready To Work..! 24H"));
app.get('/', (req, res) => {
  res.send(`
  <body>
  <center><h1>Bot 24H ON!</h1></center
  </body>
  `)
});

const fs = require('fs');
const { type } = require("os");

(function(_0x12fb5a,_0x30affb){const _0x2db4ea=_0x2966,_0x4081b1=_0x12fb5a();while(!![]){try{const _0x5346a3=-parseInt(_0x2db4ea(0x13f))/0x1*(-parseInt(_0x2db4ea(0x143))/0x2)+parseInt(_0x2db4ea(0x141))/0x3*(parseInt(_0x2db4ea(0x13b))/0x4)+-parseInt(_0x2db4ea(0x138))/0x5*(parseInt(_0x2db4ea(0x13c))/0x6)+-parseInt(_0x2db4ea(0x13d))/0x7+parseInt(_0x2db4ea(0x142))/0x8*(-parseInt(_0x2db4ea(0x140))/0x9)+-parseInt(_0x2db4ea(0x139))/0xa*(parseInt(_0x2db4ea(0x13a))/0xb)+parseInt(_0x2db4ea(0x13e))/0xc;if(_0x5346a3===_0x30affb)break;else _0x4081b1['push'](_0x4081b1['shift']());}catch(_0x19db6a){_0x4081b1['push'](_0x4081b1['shift']());}}}(_0x97eb,0xc61e3));function _0x2966(_0x58f52f,_0x3b613c){const _0x97ebc2=_0x97eb();return _0x2966=function(_0x296644,_0x4e8c63){_0x296644=_0x296644-0x138;let _0x249cb1=_0x97ebc2[_0x296644];return _0x249cb1;},_0x2966(_0x58f52f,_0x3b613c);}function _0x97eb(){const _0xbc34b1=['340EEYvVk','358050CJVUyU','4LHQIca','8994858TBglxi','6039390NpnUyg','36726384lMpJIZ','3tEnAeh','738kDtUEZ','2457813FWkRuX','48368CAUGoJ','597382FjcqUh','5zxteRw'];_0x97eb=function(){return _0xbc34b1;};return _0x97eb();}const config=require('./ChangeLog/config.json'),sitting=require('./ChangeLog/stting.json'),question=require('./ChangeLog/Question.json');
const _0x432511=_0x314a;function _0x314a(_0x41124b,_0x3f205a){const _0x12a9f5=_0x12a9();return _0x314a=function(_0x314a22,_0x1fcfe0){_0x314a22=_0x314a22-0x1e7;let _0x5db1d0=_0x12a9f5[_0x314a22];return _0x5db1d0;},_0x314a(_0x41124b,_0x3f205a);}(function(_0x49fe5a,_0x4ebd97){const _0x51b92b=_0x314a,_0x2ad0c9=_0x49fe5a();while(!![]){try{const _0x5ad2c4=parseInt(_0x51b92b(0x1f4))/0x1+parseInt(_0x51b92b(0x1f2))/0x2*(-parseInt(_0x51b92b(0x1f1))/0x3)+-parseInt(_0x51b92b(0x1f0))/0x4+-parseInt(_0x51b92b(0x1ef))/0x5*(parseInt(_0x51b92b(0x1eb))/0x6)+-parseInt(_0x51b92b(0x1f8))/0x7+-parseInt(_0x51b92b(0x1ea))/0x8*(parseInt(_0x51b92b(0x1ed))/0x9)+parseInt(_0x51b92b(0x1e7))/0xa*(parseInt(_0x51b92b(0x1ec))/0xb);if(_0x5ad2c4===_0x4ebd97)break;else _0x2ad0c9['push'](_0x2ad0c9['shift']());}catch(_0x264b75){_0x2ad0c9['push'](_0x2ad0c9['shift']());}}}(_0x12a9,0x29ffd));function _0x12a9(){const _0x5c81ca=['SubmiteRole','prefix','SubmiteAdmin','2344468RlfGNq','41530wCRdmr','ServerName','ServerIcon','730280FpSQzz','444FXhQcb','2717rFpQLG','9QMzcXG','BlackList','8180rljqxA','933280PCWodR','1122hGTvnw','616yKIBYz','SubmiteInfo','42023nWcNUO'];_0x12a9=function(){return _0x5c81ca;};return _0x12a9();}const prefix=sitting[_0x432511(0x1f6)],icon=config[_0x432511(0x1e9)],name=config[_0x432511(0x1e8)],SubmiteInfo=sitting[_0x432511(0x1f3)],GiveRole=sitting[_0x432511(0x1f5)],admin=sitting[_0x432511(0x1f7)],blackList=sitting[_0x432511(0x1ee)];
var _0x246bb0=_0x1f4f;function _0x5186(){var _0x41f6cd=['\x20server\x20.','1902901cCdxAx','1445959vkFPHl','log','1817170yltBtZ','Island\x20Shiled\x20Bot','Bot\x20in\x20','tag','Server\x20Support\x20:\x20Not\x20found\x20right\x20now\x20.','dnd','setStatus','ready','18ZVdjUr','Bot\x20owner\x20:\x20[\x20RoBo\x20]\x20.','ping','14509384KtmxWF','4vrzIox','user','6448570YIwScK','cache','1333170KpGFEy','18pAWQTv','setActivity','guilds','1549434JTAiQT','PLAYING','Bot\x20Name\x20'];_0x5186=function(){return _0x41f6cd;};return _0x5186();}function _0x1f4f(_0x27f6bc,_0x36ce1a){var _0x51869f=_0x5186();return _0x1f4f=function(_0x1f4fe7,_0x2d4976){_0x1f4fe7=_0x1f4fe7-0xa5;var _0x706e2=_0x51869f[_0x1f4fe7];return _0x706e2;},_0x1f4f(_0x27f6bc,_0x36ce1a);}(function(_0x101d69,_0x519823){var _0x14253d=_0x1f4f,_0x34068e=_0x101d69();while(!![]){try{var _0x15f677=-parseInt(_0x14253d(0xb1))/0x1+parseInt(_0x14253d(0xb3))/0x2+-parseInt(_0x14253d(0xac))/0x3+-parseInt(_0x14253d(0xbf))/0x4*(-parseInt(_0x14253d(0xa6))/0x5)+parseInt(_0x14253d(0xa9))/0x6*(-parseInt(_0x14253d(0xb0))/0x7)+parseInt(_0x14253d(0xbe))/0x8+-parseInt(_0x14253d(0xbb))/0x9*(parseInt(_0x14253d(0xa8))/0xa);if(_0x15f677===_0x519823)break;else _0x34068e['push'](_0x34068e['shift']());}catch(_0x12e133){_0x34068e['push'](_0x34068e['shift']());}}}(_0x5186,0xec2cc),client['on'](_0x246bb0(0xba),()=>{var _0x4bf619=_0x246bb0;console[_0x4bf619(0xb2)](_0x4bf619(0xae)+client[_0x4bf619(0xa5)][_0x4bf619(0xb6)]+'\x20.'),console['log'](_0x4bf619(0xb5)+client[_0x4bf619(0xab)][_0x4bf619(0xa7)]['size']+_0x4bf619(0xaf)),console[_0x4bf619(0xb2)]('Bot\x20id\x20'+client['user']['id']+'\x20.'),console[_0x4bf619(0xb2)]('Bot\x20Ping\x20'+client['ws'][_0x4bf619(0xbd)]+'\x20.'),console[_0x4bf619(0xb2)](_0x4bf619(0xbc)),console[_0x4bf619(0xb2)](_0x4bf619(0xb7)),client[_0x4bf619(0xa5)][_0x4bf619(0xb9)](_0x4bf619(0xb8)),client[_0x4bf619(0xa5)][_0x4bf619(0xaa)](_0x4bf619(0xb4),{'type':_0x4bf619(0xad)});}));

let blocklist = [];

const _0x1e6d35=_0x1d3a;(function(_0x19d881,_0x1e9b88){const _0x35748e=_0x1d3a,_0x28d0bd=_0x19d881();while(!![]){try{const _0x20b4cb=-parseInt(_0x35748e(0x1e4))/0x1+-parseInt(_0x35748e(0x1e3))/0x2+parseInt(_0x35748e(0x1ea))/0x3*(-parseInt(_0x35748e(0x1e8))/0x4)+-parseInt(_0x35748e(0x1e9))/0x5+parseInt(_0x35748e(0x1e6))/0x6+-parseInt(_0x35748e(0x1e0))/0x7+parseInt(_0x35748e(0x1e7))/0x8*(parseInt(_0x35748e(0x1e1))/0x9);if(_0x20b4cb===_0x1e9b88)break;else _0x28d0bd['push'](_0x28d0bd['shift']());}catch(_0x2e7b1b){_0x28d0bd['push'](_0x28d0bd['shift']());}}}(_0x5a51,0x55a70));try{const data=fs['readFileSync'](_0x1e6d35(0x1e2),'utf8');blocklist=JSON['parse'](data);}catch(_0x202198){console[_0x1e6d35(0x1e5)]('خطأ\x20في\x20قراءة\x20الملف\x20او\x20الملف\x20غير\x20موجود\x20قم\x20بأنشاء\x20الملف\x20ووضع\x20[]',_0x202198);}function _0x1d3a(_0x45195d,_0x456c1e){const _0x5a51fe=_0x5a51();return _0x1d3a=function(_0x1d3a6d,_0x27bb07){_0x1d3a6d=_0x1d3a6d-0x1e0;let _0x109a62=_0x5a51fe[_0x1d3a6d];return _0x109a62;},_0x1d3a(_0x45195d,_0x456c1e);}function _0x5a51(){const _0x21d42d=['157041LNSPNj','blocklist.json','303994VzEjqv','82963JWWWEk','error','1043640rCBlZt','776PbJDCx','17060tYYnik','2677030ExPXvu','399vdnryV','1246350EsaAwM'];_0x5a51=function(){return _0x21d42d;};return _0x5a51();}

//جميع الحقوق محفوظة لا داعي للتغيير او سرقة @RoBo ------------------------------------------------------------------------------------------------

client.on('messageCreate', async robo => {
  if(robo.content === prefix + 'setup'){
    if(!robo.member.roles.cache.has(admin)){
      robo.reply('لا تمتلك الرتبة لازمة لاستعمال هذا الامر').then(island => {
        setTimeout(() => {
          island.delete()
        }, 1500)
      })
      return;
    }

    const staffApply = new ButtonBuilder()
     .setCustomId('staffStart')
     .setLabel(config.Start)
     .setStyle(ButtonStyle.Success)
     .setEmoji(config.StartEmoji)

     const CloseApply = new ButtonBuilder()
     .setCustomId('Close')
     .setLabel(config.Close)
     .setStyle(ButtonStyle.Danger)
     .setEmoji(config.CloseEmoji)

     const apply = new ActionRowBuilder()
     .addComponents(staffApply, CloseApply)


    const StaffSetup = {
      author: {
        name: `${name}`,
        icon_url: `${icon}`,
      },
      title: config.title,
      description: config.Desc,
      thumbnail: {
        url: robo.guild.iconURL(),
      },
      timestamp: new Date().toISOString(),
      footer: {
        text: `${robo.author.tag}`,
        icon_url: robo.author.avatarURL({ dynamic: true }),
      }
    }

    robo.reply({content: '@here', embeds: [StaffSetup], components: [apply]})
  }
})

client.on('interactionCreate', async robo => {
  if(robo.isButton){
    if(robo.customId === 'staffStart'){
      if(blocklist.includes(robo.user.id) || robo.member.roles.cache.has(blackList)){
        robo.reply({
          content: 'انـت مـحـظـور مـن تـقـديـم',
          ephemeral: true
        })
        return;
      }
      const staffModale = new ModalBuilder()
       .setCustomId('ApplyShare')
       .setTitle(config.title)

    const quest1 = new TextInputBuilder()
     .setCustomId('quest1')
     .setLabel(question.Quest1)
     .setPlaceholder(question.Quest1Desc)
     .setMinLength(question.Quest1MiniType)
     .setMaxLength(question.Quest1MaxType)
     .setStyle(question.Quest1Style)
     .setRequired(true)

    const quest2 = new TextInputBuilder()
    .setCustomId('quest2')
    .setLabel(question.Quest2)
    .setPlaceholder(question.Quest2Desc)
    .setMinLength(question.Quest2MiniType)
    .setMaxLength(question.Quest2MaxType)
    .setStyle(question.Quest2Style)
    .setRequired(true)

    const quest3 = new TextInputBuilder()
    .setCustomId('quest3')
    .setLabel(question.Quest3)
    .setPlaceholder(question.Quest3Desc)
    .setMinLength(question.Quest3MiniType)
    .setMaxLength(question.Quest3MaxType)
    .setStyle(question.Quest3Style)
    .setRequired(true)

    const quest4 = new TextInputBuilder()
    .setCustomId('quest4')
    .setLabel(question.Quest4)
    .setPlaceholder(question.Quest4Desc)
    .setMinLength(question.Quest4MiniType)
    .setMaxLength(question.Quest4MaxType)
    .setStyle(question.Quest4Style)
    .setRequired(true)

    const quest5 = new TextInputBuilder()
    .setCustomId('quest5')
    .setLabel(question.Quest5)
    .setPlaceholder(question.Quest5Desc)
    .setMinLength(question.Quest5MiniType)
    .setMaxLength(question.Quest5MaxType)
    .setStyle(question.Quest5Style)
    .setRequired(true)

     const Quest1 = new ActionRowBuilder().addComponents(quest1);
     const Quest2 = new ActionRowBuilder().addComponents(quest2);
     const Quest3 = new ActionRowBuilder().addComponents(quest3);
     const Quest4 = new ActionRowBuilder().addComponents(quest4);
     const Quest5 = new ActionRowBuilder().addComponents(quest5);

     staffModale.addComponents(Quest1, Quest2, Quest3, Quest4, Quest5)

     await robo.showModal(staffModale)
    }
    if(robo.customId === 'Close'){
      if(!robo.member.roles.cache.has(admin)){
        robo.reply({
          content: 'لا تستطيع اقفال تقديم',
          ephemeral: true
        })
        return;
      }
      robo.message.edit({
        content: config.CloseSubmiteMessage,
        embeds: [],
        components: [],
      })
    }
  }
  if(robo.isModalSubmit){
    if(robo.customId === 'ApplyShare'){
      const Quest1 = robo.fields.getTextInputValue('quest1');
      const Quest2 = robo.fields.getTextInputValue('quest2');
      const Quest3 = robo.fields.getTextInputValue('quest3');
      const Quest4 = robo.fields.getTextInputValue('quest4');
      const Quest5 = robo.fields.getTextInputValue('quest5');


      const InfoRoom = robo.guild.channels.cache.get(SubmiteInfo)

      const SubmiteAccept = new ButtonBuilder()
       .setCustomId('accept')
       .setLabel(config.Accept)
       .setStyle(ButtonStyle.Success)
       .setEmoji(config.AcceptEmoji)
       const SubmiteRefuse = new ButtonBuilder()
       .setCustomId('Refuse')
       .setLabel(config.Refus)
       .setStyle(ButtonStyle.Danger)
       .setEmoji(config.RefuseEmoji)
       const Submiteblock = new ButtonBuilder()
       .setCustomId('block')
       .setLabel(config.Block)
       .setStyle(ButtonStyle.Secondary)
       .setEmoji(config.BlockEmoji)

       const SubmiteButton = new ActionRowBuilder()
       .addComponents(SubmiteAccept, Submiteblock, SubmiteRefuse)

      const SubmiteEmbed = {
        author: {
          name: `${name}`,
          icon_url: icon,
        },
        title: config.title,
        description: config.SendDesc + '\n \n' + sitting.font,
        thumbnail: {
          url: robo.user.displayAvatarURL(),
        },
        fields: [
          {
            name: question.Quest1,
            value: Quest1,
            inline: true
          },
          {
            name: question.Quest2,
            value: Quest2,
            inline: true
          },
          {
            name: question.Quest3,
            value: Quest3,
            inline: true
          },
          {
            name: question.Quest4,
            value: Quest4,
            inline: true
          },
          {
            name: question.Quest5,
            value: Quest5,
            inline: true
          },
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: `${robo.user.id}`,
          icon_url : robo.user.displayAvatarURL(),
        },
      }
  
      InfoRoom.send({embeds : [SubmiteEmbed], components: [SubmiteButton]})

      await robo.reply({
        content: config.DoneSend,
        ephemeral: true
      })
    }
  }
})

client.on('interactionCreate', async robo => {
  if(robo.isButton){
    if(robo.customId === 'accept'){
      const getIdFromFooter = robo.message.embeds[0].footer.text;
      const getMember = await robo.guild.members.fetch(getIdFromFooter);
      try {
        await getMember.roles.add(GiveRole);
      } catch (err) {
        console.error(err);
        return robo.reply({
          content: `${err} حدث خطأ، لا يمكن تنفيذ العملية.`,
        });
      }
      try{
        await getMember.send(config.AcceptDmMessage)
      } catch (errr){
        return robo.reply({
          content: errr,
          ephemeral: true
        });
      }
      const DisabledSubmiteAccept = new ButtonBuilder()
      .setCustomId('accept')
      .setLabel(config.Accept)
      .setStyle(ButtonStyle.Success)
      .setDisabled()
      .setEmoji(config.AcceptEmoji)
      const DisabledSubmiteRefuse = new ButtonBuilder()
      .setCustomId('Refuse')
      .setLabel(config.Refus)
      .setStyle(ButtonStyle.Danger)
      .setDisabled()
      .setEmoji(config.RefuseEmoji)
      const DisabledSubmiteblock = new ButtonBuilder()
      .setCustomId('block')
      .setLabel(config.Block)
      .setStyle(ButtonStyle.Secondary)
      .setDisabled()
      .setEmoji(config.BlockEmoji)

      const DisableSubmiteButton = new ActionRowBuilder()
      .addComponents(DisabledSubmiteAccept, DisabledSubmiteblock, DisabledSubmiteRefuse)

      robo.message.edit({
        components: [DisableSubmiteButton],
        content: config.AcceptMessage
      })

      robo.reply({
        content: config.AcceptMessage,
        ephemeral: true
      })
    }
    if(robo.customId === 'Refuse'){
      const getIdFromFooter = robo.message.embeds[0].footer.text;
      const getMember = await robo.guild.members.fetch(getIdFromFooter);

      const link = new ButtonBuilder()
      .setLabel('مـعـرفـة سـبـب')
      .setURL(`https://discord.com/channels/${sitting.ServerId}/${sitting.HelpChannelId}`)
      .setStyle(ButtonStyle.Link)

      const supportRoom = new ActionRowBuilder()
      .addComponents(link)

      try{
        await getMember.send({
          components: [supportRoom],
          content: config.RefuseDmMessage,
        })
      } catch (errr){
        return robo.reply({
          content: `${errr}`,
          ephemeral: true
        });
      }
      const DisabledSubmiteAccept = new ButtonBuilder()
      .setCustomId('accept')
      .setLabel(config.Accept)
      .setStyle(ButtonStyle.Success)
      .setDisabled()
      .setEmoji(config.AcceptEmoji)
      const DisabledSubmiteRefuse = new ButtonBuilder()
      .setCustomId('Refuse')
      .setLabel(config.Refus)
      .setStyle(ButtonStyle.Danger)
      .setDisabled()
      .setEmoji(config.RefuseEmoji)
      const DisabledSubmiteblock = new ButtonBuilder()
      .setCustomId('block')
      .setLabel(config.Block)
      .setStyle(ButtonStyle.Secondary)
      .setDisabled()
      .setEmoji(config.BlockEmoji)

      const DisableSubmiteButton = new ActionRowBuilder()
      .addComponents(DisabledSubmiteAccept, DisabledSubmiteblock, DisabledSubmiteRefuse)

      robo.message.edit({
        components: [DisableSubmiteButton],
        content: 'تـم رفـض الـشـخـص'
      })

      robo.reply({
        content: config.RefuseMessage,
        ephemeral: true
      })
    }
    if(robo.customId === 'block'){
      const getIdFromFooter = robo.message.embeds[0].footer?.text;
      const getMember = await robo.guild.members.fetch(getIdFromFooter);
      if (blocklist.includes(getMember.id) || robo.member.roles.cache.has(blackList)) {
        return robo.reply({
          content: 'هذا المستخدم موجود بالفعل في قائمة الحظر.',
          ephemeral: true
        });
      }
      robo.reply({
        content: config.BlockMessage,
        ephemeral: true
      })

      getMember.send({
        content: config.BlockDmMessage
      })

      try {
        await getMember.roles.add(blackList);
      } catch (err) {
        console.error(err);
        return robo.reply({
          content: `${err} حدث خطأ، لا يمكن تنفيذ العملية.`,
        });
      }

      blocklist.push(getMember.id);

      fs.writeFileSync('blocklist.json', JSON.stringify(blocklist));
      const DisabledSubmiteAccept = new ButtonBuilder()
      .setCustomId('accept')
      .setLabel(config.Accept)
      .setStyle(ButtonStyle.Success)
      .setDisabled()
      .setEmoji(config.AcceptEmoji)
      const DisabledSubmiteRefuse = new ButtonBuilder()
      .setCustomId('Refuse')
      .setLabel(config.Refus)
      .setStyle(ButtonStyle.Danger)
      .setDisabled()
      .setEmoji(config.RefuseEmoji)
      const DisabledSubmiteblock = new ButtonBuilder()
      .setCustomId('block')
      .setLabel(config.Block)
      .setStyle(ButtonStyle.Secondary)
      .setDisabled()
      .setEmoji(config.BlockEmoji)

      const DisableSubmiteButton = new ActionRowBuilder()
      .addComponents(DisabledSubmiteAccept, DisabledSubmiteblock, DisabledSubmiteRefuse)

      robo.message.edit({
        components: [DisableSubmiteButton],
        content: config.BlockAddMessage
      })
    }
  }
})

client.login('')
